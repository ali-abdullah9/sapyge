"use client";

import Image from "next/image";
// import useStoreUserEffect from "@/hooks/use-store-user-effect";

const InboxPage = () => {
    // const userId = useStoreUserEffect();
    // if (userId === null) {
    //     return <div>Storing user...</div>;
    // }
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Image
                src="/empty-inbox.svg"
                alt="Empty"
                width={340}
                height={340}
            />
            <h2 className="text-2xl font-semibold mt-6 text-zinc-300">
                Welcome to inbox!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Select a conversation or start a new one!
            </p>
        </div>
    );
};

export default InboxPage;