export type GPTModel = "gpt-3.5-turbo-1106" | "gpt-4o-mini";

//make it const
export const GPTModel = {
    GPT3: "gpt-3.5-turbo-1106",
    GPT4: "gpt-4o-mini"
} as const;