import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useMutation, useQuery } from "convex/react"
import { ChevronDown, Sparkles, Zap } from "lucide-react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { GPTModel } from "@/lib/type";


export const SelectModal = () => {
    const currentUser = useQuery(api.users.getCurrentUser, {});
    const {
        mutate: selectGPT,
        pending: selectGPTPending
    } = useApiMutation(api.users.selectGPT);

    const [openSelect, setOpenSelect] = useState(false);


    if (currentUser === undefined) {
        return <div>Loading...</div>;
    }

    if (currentUser === null) {
        return <div>User Not Found</div>
    }


    const GPTVersionText = currentUser.model === GPTModel.GPT3 ? "3.5" : "4";

    const handleClick = (model: GPTModel) => {
        // if gpt-3, just select and return
        if (model === GPTModel.GPT3) {
            selectGPT({ model });
            setOpenSelect(!openSelect);
            return;
        }
  
        selectGPT({ model });
        setOpenSelect(!openSelect);
    }

    const toggleOpen = () => {
        setOpenSelect(!openSelect);
    }

    return (
        <>
            <Popover open={openSelect}>
                <PopoverTrigger
                    onClick={toggleOpen}
                    className="flex space-x-2 font-semibolditems-center"
                >
                    <p>GPT Version</p>
                    <p className="text-white/50">{GPTVersionText}</p>
                    <ChevronDown className="text-white/50 w-5 h-5" />
                </PopoverTrigger>
                <PopoverContent className="flex flex-col border-0 bg-neutral-700 text-white p-3 space-y-4">
                    <div
                        onClick={() => handleClick(GPTModel.GPT3)}
                        className="flex items-center text-start cursor-pointer rounded-md justify-start space-x-2 p-2 w-full h-full hover:bg-neutral-600"
                    >
                        <Zap className="w-6 h-6" />
                        <div className="w-full">
                            <p className="font-normal">GPT 3.5</p>
                            <p className="text-white/70">Great for everyday tasks.</p>
                        </div>
                        <Checkbox id="terms1" checked={currentUser.model === GPTModel.GPT3} />
                    </div>

                    <div
                        onClick={() => handleClick(GPTModel.GPT4)}
                        className="flex items-center text-start cursor-pointer rounded-md justify-start space-x-2 p-2 w-full h-full hover:bg-neutral-600"
                    >
                        <Sparkles className="w-6 h-6" />
                        <div className="w-full">
                            <p className="font-normal">GPT-4</p>
                            <p className="text-white/70">Our smartest model</p>
                        </div>
                        <Checkbox id="terms2" checked={currentUser.model === GPTModel.GPT4} />
                    </div>
                </PopoverContent>
            </Popover>
        </>
    )
}