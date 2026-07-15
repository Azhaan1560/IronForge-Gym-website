import Image from "next/image";
export default function About() {
    return (
        <section className="py-section-gap-sm md:py-section-gap-lg px-margin-mobile md:px-margin-desktop relative" id="about">
            <div  className="max-w-container-max mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div>
                                <h2
                            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-8 border-l-4 border-electric-blue pl-6">
                            THE STORY</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                            Born from industrial iron and refined by sports science, Iron Forge Gym is not just a training
                            facility; It&apos;s a performance lab. We strip away the unnecessary and focus entirely on raw strength
                            and technical precision.
                        </p>
                        <p className="font-body-md text-body-md text-metadata-grey mb-12">
                            Our environment is engineered for intense focus. Here, the interface recedes, allowing your
                            performance data and physical output to take center stage.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div
                                className="bg-surface-card p-6 border border-border-dark rounded glow-hover transition-all duration-300">
                                <span
                                    className="material-symbols-outlined text-electric-blue text-4xl mb-4 block">fitness_center</span>
                                <h3 className="font-label-bold text-label-bold uppercase text-on-surface mb-2">Heavy-Duty Iron</h3>
                                <p className="text-sm text-metadata-grey">Machined for maximum load and durability.</p>
                            </div>
                            <div
                                className="bg-surface-card p-6 border border-border-dark rounded glow-hover transition-all duration-300">
                                <span
                                    className="material-symbols-outlined text-electric-blue text-4xl mb-4 block">sports_martial_arts</span>
                                <h3 className="font-label-bold text-label-bold uppercase text-on-surface mb-2">Technical Coaching
                                </h3>
                                <p className="text-sm text-metadata-grey">Expert guidance for elite movement.</p>
                            </div>
                            <div
                                className="bg-surface-card p-6 border border-border-dark rounded glow-hover transition-all duration-300">
                                <span
                                    className="material-symbols-outlined text-electric-blue text-4xl mb-4 block">query_stats</span>
                                <h3 className="font-label-bold text-label-bold uppercase text-on-surface mb-2">Precision Data</h3>
                                <p className="text-sm text-metadata-grey">Track every metric of your performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-[450px] lg:h-[600px] rounded-xl overflow-hidden border border-border-dark">
                        <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay z-10"></div>
                        <Image
                            src="/images/about.jpg"
                            alt="Close up of heavily knurled barbell resting on a dark steel rack."
                            loading="eager"
                            width={600}
                            height={600}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />

                        <div className="absolute bottom-8 left-8 z-20 flex gap-2">
                            <div className="w-8 h-2 bg-electric-blue rounded-full"></div>
                            <div className="w-2 h-2 bg-border-dark rounded-full"></div>
                            <div className="w-2 h-2 bg-border-dark rounded-full"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}