"use client";

import { api } from "@/convex/_generated/api";
import { useAction, useConvexAuth, useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ConnectStripe = () => {
    const router = useRouter();
    const createStripe = useAction(api.users.createStripe);

    return (
        <div>
            <Button
                onClick={async () => {
                    try {
                        const url = await createStripe({});
                        if (url === null) return;
                        router.push(url);
                    } catch (error) {
                        console.error("Failed to create Stripe account:", error);
                        alert("There was an issue connecting your Stripe account. Please try again later.");
                    }
                }}
                variant={"blue"}
            >
                Connect Stripe
            </Button>
        </div>
    );
}
export default ConnectStripe;
