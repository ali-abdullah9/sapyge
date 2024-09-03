import { Separator } from "@/components/ui/separator";
import { ChatList } from "./chat-list";
import { NewChatButton } from "./new-chat-button";

export const Sidebar = () => {
    return (
        <div className="h-screen hidden lg:flex lg:flex-col lg:w-[300px] bg-neutral-950 p-4 gap-3">
            <NewChatButton />
            <Separator></Separator>
            <ChatList />
        </div>
    );
};