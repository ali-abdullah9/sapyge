import ConferBottombar from '@/components/conferencing/ConferBottombar';
import Sidebar from '@/components/conferencing/Sidebar';
import Header from '@/components/shared/Header';
import { Toaster } from '@/components/ui/toaster';
import { Metadata } from 'next';
import { ReactNode } from 'react';



export const metadata: Metadata = {
  title: 'Sapyge.',
  description: 'A space for sage.',
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main >
        <Header/>

      <div className="flex">
        <Sidebar />
        
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-24 pb-6 max-md:pb-14 sm:px-14 bg-dark-2 bg-confer-hero bg-cover">
          <div >{children}</div>
        </section>
      </div>
      <Toaster/>

      <ConferBottombar/>
    </main>
  );
};

export default RootLayout;