import Navbar from "./_components/navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <>
        <Navbar />
        <main className="bg-logo-gradient h-screen">
            
            {children}
        </main>
        </>
        
    );
}

export default DashboardLayout;