"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { Form } from "./_components/form";
import { Header } from "./_components/header";
import { Body } from "./_components/body";
import { useEffect } from "react";

interface ChatPageProps {
    params: {
        chatId: Id<"chats">;
    }
}

const Chat = ({ params }: ChatPageProps) => {
    const chat = useQuery(api.chats.get, { id: params.chatId });

    const router = useRouter();

    if (chat === null) {
        router.push("/");
    }




    return (
        <div className=" w-full h-full flex flex-col bg-logo-gradient">
            <Header />
                <Body chatId={params.chatId} />
                <div className=" bottom-0 bg-inherit mb-8">
                    <Form chatId={params.chatId} />

            </div>
        </div>
    )
}

export default Chat;