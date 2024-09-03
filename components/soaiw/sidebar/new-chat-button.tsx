"use client";

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react"

export const NewChatButton = () => {
    const create = useMutation(api.chats.create);

    const handleAdd = () => {
        create({});
    }

    return (
        <Button
            className="w-full flex justify-start  items-center hover:bg-inherit p-0 "
            onClick={handleAdd}
            variant={"link"}
        >
            <PlusCircle className="w-5 h-5" />
            <p className="font-semibold text-start ml-3">New Chat</p>
        </Button>
    )
}