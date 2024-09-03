"use client";

import { useEffect } from "react";
import { CreateForm } from "./_components/create-forms";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";



interface CreateGigProps {
    params: {
        username: string;
    }
}

const CreateGig = ({
    params
}: CreateGigProps) => {
    return (
        <div className="flex justify-center mt-4">
            <CreateForm
                username={params.username}
            />
        </div>
    );
}
export default CreateGig;