import Header from "@/components/shared/Header";
import { Sidebar } from "@/components/soaiw/sidebar";


interface ChatLayoutProps {
    children: React.ReactNode;
}

export default function ChatLayout({ children }: ChatLayoutProps) {
    return (
        <main >
            <Header />
            <div className="flex">
            <Sidebar />
            <div className="h-screen">
                {children}
            </div>
            </div>
            
        </main>
    );
};