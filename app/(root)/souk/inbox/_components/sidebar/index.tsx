"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboardIcon, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
})

interface SidebarProps {
    children: React.ReactNode;
}

export const Sidebar = ({
    children
}: SidebarProps) => {
    return (
        <aside className="fixed z-[1] left-0 bg-dark-3 h-full w-[300px] hidden lg:flex p-3 pt-5 flex-col gap-y-4 text-white">
            <div className="">
                {children}
            </div>
        </aside>
    );
};