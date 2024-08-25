import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "@/globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import React from "react";
import Topbar from "@/components/community/shared/Topbar";
import Rightbar from "@/components/community/shared/Rightbar";
import Leftbar from "@/components/community/shared/Leftsidebar";
import Bottombar from "@/components/community/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapyge",
  description: "A space for sage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
          <Topbar />
          <main className="flex flex-row">
            <Leftbar />
            <section className="main-container ">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <Rightbar />
          </main>

          <Bottombar />
      </body>
    </html>
  );
}
