import Image from "next/image";

export default function ContactHero() {
    return (
        <header className="relative h-[350px] sm:h-[420px] md:h-[500px] flex items-center justify-center border-b border-border-dark mb-section-gap-sm md:mb-section-gap-lg">
                            <div className="absolute inset-0 ">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-b from-obsidian-black/80 via-obsidian-black/60 to-background z-10">
                                    </div>
                                    <Image
                                              src="/images/gallery10.png"
                                              alt="Industrial Gym"
                                              fill
                                              priority
                                              className="object-cover object-center"
                                    />
                            </div>
                            <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto">
                                <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg uppercase text-white mb-6 text-shadow-strong">
                                        ESTABLISH CONTACT</h1>
                                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                                        Ready to join the forge? Reach out to our team of experts for inquiries,
                                        facility tours, or membership questions.
                                </p>
                            
                            </div>
                </header>
    );
}