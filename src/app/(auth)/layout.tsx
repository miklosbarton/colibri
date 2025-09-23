import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="min-h-screen bg-accent">
            <div className="w-full grid grid-cols-2">
                <div className="w-full relative">
                    <Button className="absolute left-10 top-10"><Link href="/" className="flex items-center gap-2"><ArrowLeft className="size-4"/> Back</Link></Button>
                    <div className="w-full h-full flex items-center justify-center">
                        {children}
                    </div>
                </div>
                <div className="w-full h-screen bg-red-300">
                    <img src="/assets/images/4.jpg" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default RootLayout;