"use client";

import { useConvexAuth, useMutation } from "convex/react";
import { useEffect, useState } from "react";
import { api } from "@/convex/_generated/api";
import { GigList } from "./_components/gig-list";

interface DashboardProps {
    searchParams: {
        search?: string;
        favorites?: string;
        filter?: string;
    };
};

const Dashboard = ({
    searchParams
}: DashboardProps) => {
    const store = useMutation(api.users.store);
    useEffect(() => {
        const storeUser = async () => {
            await store({});
        }
        storeUser();
    }, [store])
    return (
        <GigList
            query={searchParams}
        />
        
    );
};

export default Dashboard;