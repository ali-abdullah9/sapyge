"use client";

import { useQuery } from "convex/react";
import { Sidebar } from "./_components/sidebar";
import { api } from "@/convex/_generated/api";
import ConversationList from "./_components/sidebar/conversation-list";
import Navbar from "../find-your-gig/_components/navbar";

export default function ConversationsLayout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <div className="fixed z-10 w-full">
                <Navbar />
            </div>
            <div className="pt-[88px]">
                <Sidebar>
                    <div className="h-full">
                        <ConversationList />
                    </div>
                </Sidebar>
                <div className="h-full lg:pl-[300px]">
                    {children}
                </div>
            </div>

        </>
    );
}