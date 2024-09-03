
  "use client";

import { api } from "@/convex/_generated/api";
import { useMutation, useQueries, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
    const storeChat = useMutation(api.users.storeChat);
    const router = useRouter();
    useEffect(() => {
        const fetch = async () => {
            const chatId = await storeChat({});
            router.push(`/tools/soaiw/chat/${chatId}`)
        }
        fetch();
    }, [storeChat, router])

    return (
        <div className=" h-full text-3xl text-center px-11 pt-11 bg-confer-hero bg-cover">
          <h1>Creating a new chat</h1>
          </div>
    );
};

export default Homepage;