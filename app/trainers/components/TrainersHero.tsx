import Image from "next/image";
export default function ProgramHero() {
    return (
        <header className="relative h-[500px] flex items-center justify-center border-b border-border-dark mb-section-gap-sm md:mb-section-gap-lg">

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian-black/80 via-obsidian-black/60 to-obsidian-black z-10"></div>
                <div className="relative w-full h-full bg-cover bg-center bg-no-repeat grayscale-[20%]">
                    <Image
                        src="/images/train_bg.png" // Put the image in public/images
                        alt="Elite Coaches"
                        fill
                        priority
                        className="object-cover grayscale-[20%]"
                    />
                </div>
            </div>
            <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center gap-6">
                <h1 className="font-display-lg text-display-lg uppercase text-on-surface tracking-tighter">ELITE COACHES</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Precision coaching for high-performance results. Meet the architects of strength.</p>
                <div className="w-24 h-1 bg-electric-blue mt-4 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            </div>

        </header>
    );
}