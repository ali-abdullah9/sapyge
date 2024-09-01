"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
// import { Footer } from "./footer";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useQuery } from "convex/react";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { Actions } from "@/components/souk/actions";
import { ConvexImage } from "@/components/souk/convex-image";
import { Footer } from "./footer";

interface GigCardProps {
    id: string;
    sellerId: string;
    title: string;
    description: string;
    createdAt: number;
    isFavorite: boolean;
    storageId?: Id<"_storage">;
    offer: Doc<"offers">;
    reviews: Doc<"reviews">[];
};

export const GigCard = ({
    id,
    sellerId,
    title,
    description,
    createdAt,
    isFavorite,
    storageId,
    offer,
    reviews,
}: GigCardProps) => {
    const { userId } = useAuth();
    const seller = useQuery(api.gig.getSeller, { id: sellerId as Id<"users"> });
    // const ownerLabel = userId === ownerId ? "You" : ownerName;
    const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

    const {
        mutate: favorite,
        pending: favoritePending
    } = useApiMutation(api.gig.favorite);
    const {
        mutate: unfavorite,
        pending: unfavoritePending
    } = useApiMutation(api.gig.unfavorite);

    const toggleFavorite = () => {
        if (isFavorite) {
            unfavorite({ id })
        } else {
            favorite({ id })
        }
    }

    if (seller === undefined) {
        return (
            <GigCard.Skeleton />
        )
    }

    if (seller === null) {
        return <div>
            Seller not found
        </div>
    }

    return (
        <Link href={`souk/post-your-gig/${seller?.username}/${id}`} >
            <div className="group border rounded-lg flex flex-col justify-between overflow-hidden mt-8 ">
                <div className="relative flex-1 bg-blue-50">
                    <ConvexImage
                        storageId={storageId}
                        title={title}
                    />


                    <Actions
                        id={id}
                        title={title}
                        side="right"
                    >
                        <button
                            className="absolute top-1 right-1 opacity-25 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none"
                        >
                            <MoreHorizontal
                                className=" opacity-25 hover:opacity-100 transition-opacity"
                            />
                        </button>
                    </Actions>
                </div>
                <Footer
                    isFavorite={isFavorite}
                    title={title}
                    ownerLabel={seller.username}
                    createdAtLabel={createdAtLabel}
                    onClick={toggleFavorite}
                    disabled={favoritePending || unfavoritePending}
                    offer={offer}
                    reviews={reviews}
                    seller={seller}
                />
            </div>
        </Link>
    )
}

GigCard.Skeleton = function BoardCardSkeleton() {
    return (
        <div className="aspect-[130/100] rounded-lg overflow-hidden">
            <Skeleton className="h-full w-full" />
        </div>
    );
};