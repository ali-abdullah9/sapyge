"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Images } from "@/components/souk/images";
import { Description } from "@/components/souk/description";
import { Info } from "lucide-react";
import { AddReview } from "../_components/reviews/add-review";
import { SellerDetails } from "./_components/seller-details";
import { Seller } from "./_components/seller";
import { Offers } from "./_components/offers";
import { Header } from "./_components/header";
import Loading from "@/components/auth/loading";
import { Reviews } from "../_components/reviews/reviews";
import { useQuery } from "convex/react";

interface PageProps {
  params: {
    username: string;
    gigId: string;
  };
}

const GigPage = ({ params }: PageProps) => {
  const currentUser = useQuery(api.users.getCurrentUser, {});
  const gigId = params.gigId as Id<"gigs"> | undefined;

  if (!gigId) {
    console.error("Gig ID is missing");
    return null; // or handle the error appropriately
  }

  const gig = useQuery(api.gig.get, { id: gigId });

  //const seller = useQuery(api.users.getUserByUsername, { username: params.username });
  const categoryAndSubcategory = useQuery(api.gig.getCategoryAndSubcategory, {
    gigId: params.gigId as Id<"gigs">,
  });
  const offers = useQuery(api.offers.get, {
    gigId: params.gigId as Id<"gigs">,
  });
  const reviews = useQuery(api.reviews.getByGig, {
    gigId: params.gigId as Id<"gigs">,
  });
  const reviewsFull = useQuery(api.reviews.getFullByGig, {
    gigId: params.gigId as Id<"gigs">,
  });

  if (
    gig === undefined ||
    reviews === undefined ||
    reviewsFull === undefined ||
    categoryAndSubcategory === undefined ||
    offers == undefined
  ) {
    return <Loading />;
  }

  if (gig === null || categoryAndSubcategory === null || offers === null) {
    return <div>Not found</div>;
  }

  if (gig.published === false) {
    return <div>This gig is not published</div>;
  }

  const editUrl = `/souk/post-your-gig/${gig.seller.username}/manage-gigs/edit/${gig._id}`;

  return (
    <div>
      <div className="flex flex-col sm:flex-row w-full sm:justify-center space-x-0 sm:space-x-3 lg:space-x-16">
        <div className="w-full space-y-8">
          <Header
            {...categoryAndSubcategory}
            editUrl={editUrl}
            ownerId={gig.seller._id}
          />
          <h1 className="text-3xl font-bold break-words text-[#3F3F3F]">
            {gig.title}
          </h1>
          <Seller seller={gig.seller} reviews={reviews} />
          <Images images={gig.images} title={gig.title} allowDelete={false} />
          {/* <h2 className="font-semibold">About this gig</h2> */}
          <Description
            editable={false}
            initialContent={gig.description}
            gigId={gig._id}
          />
          <div className="border border-zinc-400 p-4 space-y-2 rounded-2xl">
            <div className="flex space-x-2">
              <Info />
              <h4>Delivery preferences</h4>
            </div>
            <p>
              Please communicate any preferences or concerns regarding the
              utilization of AI tools in the fulfillment and/or delivery of your
              request.
            </p>
          </div>
          <SellerDetails
            seller={gig.seller}
            reviews={reviews}
            lastFulFilmentTime={gig.lastFulfilment?.fulfilmentTime}
            languages={gig.seller.languages}
          />
        
                    <Reviews
                        reviews={reviewsFull}
                    />
          {(currentUser?._id === gig.seller._id ? null:          
          <AddReview gigId={gig._id} sellerId={gig.seller._id} />
          )}
        </div>
        <Offers offers={offers} sellerId={gig.seller._id} editUrl={editUrl} />
      </div>
    </div>
  );
};

export default GigPage;
