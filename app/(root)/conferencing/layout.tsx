import StreamVideoProvider from "@/providers/StreamClientProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@stream-io/video-react-sdk/dist/css/styles.css"
import "react-datepicker/dist/react-datepicker.css"

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
      <body className={inter.className}>
        <main>
          <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
      </body>
    </html>
  );
}
