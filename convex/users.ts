import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const store = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authenticated user");
    }

    //Check if user is already stored
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();

    if (user !== null) {
      return user._id;
    }
    const userId = await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      email: identity.email!,
      username: identity.nickname!,
      name: identity.name!,
      bio: "",
      image: identity.pictureUrl!,
    });

    return userId;
  },
});

export const getUser = query({
  args: {Id:v.id("users")},
  handler: async (ctx,args) => {
    const user = await ctx.db.get(args.Id)
    return user;
  },
})