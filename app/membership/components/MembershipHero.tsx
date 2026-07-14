import Image from "next/image";
export default function MembershipHero() {
    return (
        <header className="relative h-[500px] flex items-center justify-center border-b border-border-dark mb-section-gap-sm md:mb-section-gap-lg">
            <div className="absolute inset-0 ">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-obsidian-black/80 via-obsidian-black/60 to-background z-10">
                    </div>
                    <Image
                              src="/images/membership_bg.png"
                              alt="Industrial Gym"
                              fill
                              priority
                              className="object-cover object-center"
                    />
            </div>
            <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto">
                <h1 className="font-display-lg text-display-lg text-on-surface uppercase mb-6 drop-shadow-lg">Select
                                Your Path<br /><span className="text-electric-blue">To Strength</span></h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">Commit to
                                the grind. Choose the membership that aligns with your goals and unlock access to elite
                                equipment, expert guidance, and an unrelenting community.</p>
            </div>
        </header>
    );
}