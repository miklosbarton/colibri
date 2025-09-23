import { Separator } from "@/components/ui/separator";

import type { Metadata } from 'next'
import CTA from "../../components/slices/cta";

export const metadata: Metadata = {
    title: 'About us | Colibri',
    description: '...',
}

const AboutUs = () => {
    return (

        <main className="min-h-full flex flex-col">
            <section className="px-12 py-20">
                <div className="max-w-screen-2xl mx-auto space-y-20">
                    <div className="flex gap-20">
                        <div className="flex-1">
                            <h1 className="text-7xl font-semibold mb-6 max-w-xl">Our Team</h1>
                            <p className="text-2xl text-secondary-foreground mb-8 max-w-xl leading-relaxed">We bring together decades of experience in high-performance sport and global business transformation to design cultures that are resilient, ethical, and ready for the age of AI.</p>
                            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">At Colibri, we are more than a team, we are a collective of Olympic coaches, entrepreneurs, researchers, and culture builders united by one mission, to help organisations thrive through trust, teamwork, and conscious leadership.</p>
                        </div>

                    </div>

                </div>
            </section>


            <Separator />

            <CTA />

        </main>
    )
};

export default AboutUs;
