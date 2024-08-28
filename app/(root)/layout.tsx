import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapyge",
  description: "A space for sage",
  icons:{
    icon: '/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-1 `}>
        <ConvexClientProvider>
          <main className="">
           
            {children}
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
