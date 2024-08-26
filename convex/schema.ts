import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    tokenIdentifier: v.string(),
    email: v.string(),
    username: v.string(),
    name: v.string(),
    bio: v.optional(v.string()),
    image: v.string(),

  }).index("by_token", ["tokenIdentifier"]),
});
