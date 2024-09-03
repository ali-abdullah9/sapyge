import Header from "@/components/shared/Header";
import Navbar from "../../find-your-gig/_components/navbar";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function ManageGigsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <Navbar/>

      {children}
    </>
  );
}
