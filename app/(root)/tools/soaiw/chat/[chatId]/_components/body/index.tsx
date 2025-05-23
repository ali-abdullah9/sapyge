"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useUser } from "@clerk/clerk-react";
import { useQuery } from "convex/react";
import { useEffect, useRef, useState } from "react";
import { MessageBox } from "./message-box";

interface BodyProps {
    chatId: Id<"chats">;
}

export const Body = ({ chatId }: BodyProps) => {
    const messagesSoaiw = useQuery(api.messagesSoaiw.list, { chatId }) || [];
    console.log(messagesSoaiw)
    const { user } = useUser();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messagesSoaiw])

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "auto" });
        }
    };

    return (
        <>
            <ScrollArea
                className="max-h-[calc(100%-250px)] "
            >
                <div className="px-4 sm:px-12 md:px-52 2xl:px-[430px] relative">
                    {messagesSoaiw.map((message) => (
                        <MessageBox
                            key={message._id}
                            message={message}
                            userImageUrl={user?.imageUrl}
                        />
                    ))}
                </div>
                <div ref={scrollRef} />
            </ScrollArea>
        </>
    );
};