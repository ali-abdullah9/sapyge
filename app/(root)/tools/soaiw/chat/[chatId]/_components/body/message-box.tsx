import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Doc } from "@/convex/_generated/dataModel";
import Markdown from "./markdown";
interface MessageBoxProps {
    message: Doc<"messagesSoaiw">;
    userImageUrl?: string;
}

export const MessageBox = ({
    message,
    userImageUrl
}: MessageBoxProps) => {
    const nameString = message.role === "user" ? "You" : "Soaiw";
    const imageUrl = message.role === "user" ? userImageUrl : "/file (2).png";

    return (
        <div
            className="flex space-x-3 items-start mb-10 max-w-[calc(80%)] md:max-w-full text-wrap "
        >
            <Avatar >
                <AvatarImage src={imageUrl}/>
                <AvatarFallback>
                    {nameString[0]}
                </AvatarFallback>
            </Avatar>
            <div className="max-w-[calc(80%)]">
                <h3 className="font-bold">{nameString}</h3>
                <div className="flex flex-grow flex-col gap-3 gap-y-5">
                    <Markdown content={message.content} />
                </div>
            </div>
        </div>
    )
}