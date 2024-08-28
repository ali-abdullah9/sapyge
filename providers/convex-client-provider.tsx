"use client";

import Loading from "@/components/auth/loading";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { dark} from "@clerk/themes"

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = new ConvexReactClient(convexUrl!);
const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
      <ClerkProvider 
      afterSignUpUrl="/sign-up"
      appearance={{
        layout:{
            logoImageUrl: "/logo.svg"
        },
        baseTheme:dark,
        variables:{
          colorBackground : "black",
        }
      }}>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex} >
          <AuthLoading>
            <Loading />
          </AuthLoading>
          <Authenticated>{children}</Authenticated>
          <Unauthenticated>{children}</Unauthenticated>
        </ConvexProviderWithClerk>
      </ClerkProvider>
  );
};
