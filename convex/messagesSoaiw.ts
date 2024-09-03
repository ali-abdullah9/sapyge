import { v } from "convex/values";
import { action, internalMutation, internalQuery, query } from "./_generated/server";
import { api, internal } from "./_generated/api";
import OpenAI from 'openai';

export const list = query({
    args: { chatId: v.id("chats") },
    handler: async (ctx, args) => {
        return await ctx.db.query("messagesSoaiw")
            .withIndex("by_chatId", (q) => q.eq("chatId", args.chatId))
            .collect();
    },
})

export const send = internalMutation({
    args: { role: v.union(v.literal("user"), v.literal("assistant")), content: v.string(), chatId: v.id("chats") },
    handler: async (ctx, args) => {
        const newMessageSoaiwId = await ctx.db.insert("messagesSoaiw", {
            role: args.role,
            content: args.content,
            chatId: args.chatId,
        });

        return newMessageSoaiwId;
    },
})

export const retrive = internalQuery({
    args: { chatId: v.id("chats") },
    handler: async (ctx, args) => {
        const messagesSoaiw = await ctx.db.query("messagesSoaiw")
            .withIndex("by_chatId", (q) => q.eq("chatId", args.chatId))
            .order("desc")
            .take(3);

        return messagesSoaiw;
    },
})

export const submit = action({
    args: { role: v.union(v.literal("user"), v.literal("assistant")), content: v.string(), chatId: v.id("chats") },
    handler: async (ctx, args) => {
        const currentUser = await ctx.runQuery(api.users.getCurrentUser, {});

        if (currentUser === null) {
            throw new Error("User not found");
        }

        // send user message
        await ctx.runMutation(internal.messagesSoaiw.send, {
            role: args.role,
            content: args.content,
            chatId: args.chatId,
        });

        const messagesSoaiw = await ctx.runQuery(internal.messagesSoaiw.retrive, {
            chatId: args.chatId
        });

        messagesSoaiw.reverse();

        const formattedMessages = messagesSoaiw.map(message => ({
            role: message.role,
            content: message.content
        }));

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        let response = '';

        const stream = await openai.chat.completions.create({
            model: currentUser.model,
            stream: true,
            messages: formattedMessages,
            temperature: 1,
            max_tokens: 420,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        //save message
        const newAssistantMessageId = await ctx.runMutation(internal.messagesSoaiw.send, {
            role: "assistant",
            content: "",
            chatId: args.chatId,
        });

        for await (const part of stream) {
            if (part.choices[0].delta.content === null) {
                throw Error("OpenAI completion is null");
            }

            if (part.choices[0].delta.content !== undefined) {
                response += part.choices[0].delta.content;

                await ctx.runMutation(internal.messagesSoaiw.update, {
                    messageId: newAssistantMessageId,
                    content: response,
                });
            }
        }
    }
});

export const update = internalMutation({
    args: { messageId: v.id("messagesSoaiw"), content: v.string() },
    handler: async (ctx, args) => {
        await ctx.db.patch(args.messageId, {
            content: args.content,
        })
    }
})