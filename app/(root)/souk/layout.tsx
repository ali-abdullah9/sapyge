import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/shared/Header";
import { Toaster } from "sonner";
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
      <body className={`${inter.className} `}>
        <Toaster></Toaster>

          <main className="">
            {children}
          </main>

      </body>
    </html>
  );
}
