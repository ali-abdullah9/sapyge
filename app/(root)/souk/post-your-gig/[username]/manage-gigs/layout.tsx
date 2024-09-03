import Header from "@/components/shared/Header";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function ManageGigsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <Header/>

      {children}
    </>
  );
}
