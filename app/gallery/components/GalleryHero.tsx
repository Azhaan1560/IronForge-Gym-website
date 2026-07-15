import Image from "next/image";
export default function GalleryHero(){
    return (
        <header className="relative h-[350px] sm:h-[420px] md:h-[500px] flex items-center justify-center border-b border-border-dark mb-section-gap-sm md:mb-section-gap-lg">
                    <div className="absolute inset-0 ">
                            <div
                                className="absolute inset-0 bg-gradient-to-b from-obsidian-black/80 via-obsidian-black/60 to-background z-10">
                            </div>
                            <Image
                                      src="/images/gallery_bg.png"
                                      alt="Industrial Gym"
                                      fill
                                      priority
                                      className="object-cover object-center"
                            />
                    </div>
                    <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto">
                        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 tracking-tighter">
                                THE FORGE IN FOCUS</h1>
                        <p className="font-body-lg text-body-lg text-metadata-grey max-w-2xl mx-auto">Raw iron, precision
                                engineering, and the atmosphere of relentless progress. Step inside the facility
                                designed to forge champions.</p>
                    
                    </div>
                </header>
    );
}