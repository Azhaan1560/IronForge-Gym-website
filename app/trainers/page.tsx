import TrainersHero from "./components/TrainersHero"
import Link from "next/link";
import Image from "next/image";
export default function programs() {
    return (
        <main className="flex-grow pt-[64px]">
            <TrainersHero />
            <section className="px-margin-mobile md:px-margin-desktop py-section-gap-sm max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter md:gap-12">
                    <div className="group bg-surface-card border border-border-dark rounded flex flex-col md:flex-row overflow-hidden hover:border-electric-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                        <div className="relative w-full md:w-2/5 aspect-[3/4] relative">
                            <Image
                                src="/images/marcus.png"
                                alt="Marcus Thorne"
                                fill
                                sizes="(max-width: 768px) 100vw, 40vw"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"        
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent md:bg-gradient-to-r">
                            </div>
                        </div>
                        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                                <div className="flex items-start justify-between mb-4">
                                                        <div>
                                                                <h2
                                                                        className="font-headline-md text-headline-md text-on-surface uppercase mb-1">
                                                                        Marcus Thorne</h2>
                                                                <span
                                                                        className="inline-block bg-surface-variant text-on-surface font-label-bold text-label-bold uppercase px-3 py-1 rounded text-xs border border-electric-blue/30 text-electric-blue">Strength
                                                                        &amp; Conditioning</span>
                                                        </div>
                                                </div>
                                                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Former
                                                        competitive powerlifter with 15+ years experience in technical
                                                        movement and peak performance.</p>
                                        </div>
                                        <div className="pt-4 border-t border-border-dark mt-auto">
                                                <button
                                                        className="w-full flex items-center justify-center gap-2 border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase px-6 py-3 rounded hover:bg-electric-blue/10 transition-colors">
                                                        <span className="">Book Consultation</span>
                                                        <span className="material-symbols-outlined"
                                                                style={{ fontSize: "18px" }}>arrow_forward</span>
                                                </button>
                                        </div>
                                </div>
                    </div>
                    <div className="group bg-surface-card border border-border-dark rounded flex flex-col md:flex-row overflow-hidden hover:border-electric-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                                <div className=" relative w-full md:w-2/5 aspect-[3/4] relative">
                                    <Image
                                        src="/images/sarah.png"
                                        alt="Sarah Malik"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"        
                                    />
                                        <div
                                                className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent md:bg-gradient-to-r">
                                        </div>
                                </div>
                                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                                <div className="flex items-start justify-between mb-4">
                                                        <div>
                                                                <h2
                                                                        className="font-headline-md text-headline-md text-on-surface uppercase mb-1">
                                                                        Sarah Malik</h2>
                                                                <span
                                                                        className="inline-block bg-surface-variant text-on-surface font-label-bold text-label-bold uppercase px-3 py-1 rounded text-xs border border-electric-blue/30 text-electric-blue">Functional
                                                                        Movement &amp; Mobility</span>
                                                        </div>
                                                </div>
                                                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                                                        Specializing in structural flow and metabolic conditioning for
                                                        elite athletes and fitness enthusiasts.</p>
                                        </div>
                                        <div className="pt-4 border-t border-border-dark mt-auto">
                                        <Link href="/contact">
                                        
                                                <button
                                                        className="w-full flex items-center justify-center gap-2 border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase px-6 py-3 rounded hover:bg-electric-blue/10 transition-colors">
                                                        <span className="">Book Consultation</span>
                                                        <span className="material-symbols-outlined"
                                                                style={{ fontSize: "18px" }}>arrow_forward</span>
                                             </button>
                                        </Link>
                                        </div>
                                </div>
                        </div>
                </div>
            </section>

            <section
                className="border-t border-border-dark bg-surface-container-lowest px-margin-mobile md:px-margin-desktop py-section-gap-sm relative overflow-hidden">
                <div
                        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent pointer-events-none">
                </div>
                <div className="max-w-container-max mx-auto text-center flex flex-col items-center relative z-10">
                        <h2
                                className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase text-on-surface mb-8">
                                            READY TO START YOUR TRANSFORMATION?</h2>
                        <Link href="/membership">            
                        <button
                                className="bg-electric-blue text-obsidian-black font-label-bold text-label-bold uppercase tracking-widest px-10 py-4 rounded shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3">
                                <span className="">JOIN THE FORGE</span>
                                
                        </button></Link>
                </div>
            </section>
        </main>
    );
}