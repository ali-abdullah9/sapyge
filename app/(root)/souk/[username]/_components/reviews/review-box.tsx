import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReviewFullType } from "@/types";
import { formatDistanceToNow } from 'date-fns'; // Importing formatDistanceToNow function
import { Star } from 'lucide-react'; // Importing Star component from Lucide
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';

interface ReviewBoxProps {
    review: ReviewFullType;
}

export const ReviewBox = ({ review }: ReviewBoxProps) => {
    
    // Calculate average review score
    const averageScore = (review.communication_level + review.recommend_to_a_friend + review.service_as_described) / 3;

    // Calculate distance to now from review creation time
    const distanceToNow = formatDistanceToNow(new Date(review._creationTime), { addSuffix: true });

    return (
        <div className="flex space-x-4">
            <Avatar>
                <AvatarImage src="/profile-icon.svg" alt="Avatar" />
                <AvatarFallback>{ }</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-2">
                <p className="font-bold">{review.author.fullName}</p>
                <p>{review.author.country.countryName}</p>
                <div className='flex space-x-6 items-center'>
                    <div className="flex items-center font-bold">
                        {/* Display 5 stars */}
                        {[...Array(5)].map((_, index) => (
                            <Star key={index} size={24} color={"orange"} className='w-5 h-5' />
                        ))}
                        <span className="ml-2">{averageScore.toFixed(1)}</span>
                    </div>
                    <p>{distanceToNow}</p>
                </div>
                <p>{review.comment}</p>
            </div>
            <Separator orientation='vertical' />
            <div className='w-[600px]'>
                <p className='text-muted-foreground'>Ordered:</p>
                <div className='flex space-x-4 items-center'>
                    <div className='w-[300px]'>
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src={review.image.url}
                                fill
                                alt={review.gig.title}
                                className="rounded-md object-cover"
                            />
                        </AspectRatio>
                    </div>
                    <div className='flex flex-col space-y-3 justify-evenly'>
                        <p className='font-normal'>{review.gig.title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};