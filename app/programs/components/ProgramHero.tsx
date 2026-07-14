import Image from "next/image";
export default function ProgramHero() {
    return (
        <header className="relative min-h-[60vh] flex items-center justify-center border-b border-border-dark mb-section-gap-sm md:mb-section-gap-lg">
            <div className="absolute inset-0 ">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-obsidian-black/80 via-obsidian-black/60 to-background z-10">
                    </div>
                    <Image
                              src="/images/prog_bg.png"
                              alt="Industrial Gym"
                              fill
                              priority
                              className="object-cover object-center"
                    />
            </div>
            <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto">
                <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 tracking-tighter">
                    ELITE <span className="text-electric-blue">TRAINING</span> PROGRAMS
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    Precision-engineered fitness protocols designed for raw strength, kinetic
                    velocity, and total structural optimization. No compromises.
                </p>
            </div>
        </header>
    );
}