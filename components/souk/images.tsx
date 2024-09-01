"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { ImageWithUrlType } from "@/types"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MoreHorizontal, Trash2 } from "lucide-react"
import { useState } from "react"
import { Actions } from "@/app/(root)/souk/post-your-gig/[username]/manage-gigs/edit/[gigId]/_components/action";

interface ImagesProps {
    images: ImageWithUrlType[];
    title: string;
    allowDelete: boolean;
    className?: string;
}

export const Images = ({
    images,
    title,
    allowDelete,
    className
}: ImagesProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Carousel className="select-none" onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <CarouselContent className={className || ""}>
                {images.map((image) => {
                    return (
                        <CarouselItem
                            key={image._id}
                        >
                            <AspectRatio ratio={16 / 9} >
                                {allowDelete && (
                                    <Actions
                                        side="bottom"
                                        sideOffset={10}
                                        storageId={image.storageId}
                                    >
                                        <Trash2 />
                                    </Actions>
                                )}
                                
                                <Image
                                    src={image.url || ''}
                                    alt={title}
                                    fill
                                    className="rounded-md object-cover "
                                />
                                
                               
                            </AspectRatio>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious
                className='absolute top-1/2 left-2 transform -translate-y-1/2 transition-opacity duration-300 cursor-pointer opacity-45 bg-dark-2'
            />
            <CarouselNext
                className='absolute top-1/2 right-2 transform -translate-y-1/2 transition-opacity duration-300 cursor-pointer opacity-45 bg-dark-2'
            />
        </Carousel>
    )
}