import ProgramHero from "./components/ProgramHero"
import Link from "next/link";

export default function programs() {
    return (
        <main className="flex-grow pt-[64px]">
            <ProgramHero />
            <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap-sm md:mb-section-gap-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    <div className="bg-surface-card border border-border-dark rounded-lg p-6 flex flex-col group hover:border-electric-blue transition-colors duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-electric-blue text-3xl"
                                    data-icon="fitness_center">fitness_center</span>
                                <h2 className="font-headline-md text-headline-md uppercase">HEAVY-DUTY IRON</h2>
                        </div>
                        <div className="mb-4">
                            <span className="bg-surface-container text-metadata-grey font-label-bold text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-border-dark">Weight
                                Training
                            </span>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                            Maximal strength development protocol. Focuses on progressive overload,
                            compound lifts, and absolute mechanical tension.
                         </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                            <button className="flex-1 bg-transparent border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase py-2 rounded hover:bg-electric-blue/10 transition-colors">VIEW
                                    DETAILS</button>
                            <button
                                                        className="flex-1 bg-electric-blue text-obsidian-black font-label-bold text-label-bold uppercase py-2 rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow">BOOK
                                                        SESSION</button>
                                        </div>
                                </div>
                                
                                <div
                                        className="bg-surface-card border border-border-dark rounded-lg p-6 flex flex-col group hover:border-electric-blue transition-colors duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <div className="flex items-center gap-3 mb-4">
                                                <span className="material-symbols-outlined text-electric-blue text-3xl"
                                                        data-icon="bolt">bolt</span>
                                                <h2 className="font-headline-md text-headline-md uppercase">KINETIC VELOCITY
                                                </h2>
                                        </div>
                                        <div className="mb-4">
                                                <span
                                                        className="bg-surface-container text-metadata-grey font-label-bold text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-border-dark">Cardio
                                                        / HIIT</span>
                                        </div>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                                                High-intensity metabolic conditioning. Engineered to maximize oxygen
                                                uptake, explosiveness, and sustained power output.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <button
                                                        className="flex-1 bg-transparent border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase py-2 rounded hover:bg-electric-blue/10 transition-colors">VIEW
                                                        DETAILS</button>
                                                <button
                                                        className="flex-1 bg-electric-blue text-obsidian-black font-label-bold text-label-bold uppercase py-2 rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow">BOOK
                                                        SESSION</button>
                                        </div>
                                </div>
                                
                                <div
                                        className="bg-surface-card border border-border-dark rounded-lg p-6 flex flex-col group hover:border-electric-blue transition-colors duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <div className="flex items-center gap-3 mb-4">
                                                <span className="material-symbols-outlined text-electric-blue text-3xl"
                                                        data-icon="self_improvement">self_improvement</span>
                                                <h2 className="font-headline-md text-headline-md uppercase">STRUCTURAL FLOW
                                                </h2>
                                        </div>
                                        <div className="mb-4">
                                                <span
                                                        className="bg-surface-container text-metadata-grey font-label-bold text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-border-dark">Yoga
                                                        / Mobility</span>
                                        </div>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                                                Active recovery and joint optimization. Restores mobility, repairs
                                                structural imbalances, and enhances total systemic recovery.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <button
                                                        className="flex-1 bg-transparent border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase py-2 rounded hover:bg-electric-blue/10 transition-colors">VIEW
                                                        DETAILS</button>
                                                <button
                                                        className="flex-1 bg-electric-blue text-obsidian-black font-label-bold text-label-bold uppercase py-2 rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow">BOOK
                                                        SESSION</button>
                                        </div>
                                </div>
                                
                                <div
                                        className="bg-surface-card border border-border-dark rounded-lg p-6 flex flex-col group hover:border-electric-blue transition-colors duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <div className="flex items-center gap-3 mb-4">
                                                <span className="material-symbols-outlined text-electric-blue text-3xl"
                                                        data-icon="hub">hub</span>
                                                <h2 className="font-headline-md text-headline-md uppercase">FORGE CROSS</h2>
                                        </div>
                                        <div className="mb-4">
                                                <span
                                                        className="bg-surface-container text-metadata-grey font-label-bold text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-border-dark">Functional
                                                        Training</span>
                                        </div>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                                                Hybrid athletic development. Combines Olympic lifting mechanics with
                                                gymnastic controls and aerobic threshold training.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <button
                                                        className="flex-1 bg-transparent border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase py-2 rounded hover:bg-electric-blue/10 transition-colors">VIEW
                                                        DETAILS</button>
                                                <button
                                                        className="flex-1 bg-electric-blue text-obsidian-black font-label-bold text-label-bold uppercase py-2 rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow">BOOK
                                                        SESSION</button>
                                        </div>
                                </div>
                                
                                <div
                                        className="bg-surface-card border border-border-dark rounded-lg p-6 flex flex-col group hover:border-electric-blue transition-colors duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <div className="flex items-center gap-3 mb-4">
                                                <span className="material-symbols-outlined text-electric-blue text-3xl"
                                                        data-icon="sports_martial_arts">sports_martial_arts</span>
                                                <h2 className="font-headline-md text-headline-md uppercase">COMBAT READY
                                                </h2>
                                        </div>
                                        <div className="mb-4">
                                                <span
                                                        className="bg-surface-container text-metadata-grey font-label-bold text-[10px] px-2 py-1 rounded uppercase tracking-widest border border-border-dark">Boxing
                                                        / MMA</span>
                                        </div>
                                        <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                                                Tactical striking and grappling conditioning. Builds combat-specific
                                                endurance, rotational power, and technical precision.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                                                <button
                                                        className="flex-1 bg-transparent border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase py-2 rounded hover:bg-electric-blue/10 transition-colors">VIEW
                                                        DETAILS</button>
                                                <button
                                                        className="flex-1 bg-electric-blue text-obsidian-black font-label-bold text-label-bold uppercase py-2 rounded hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-shadow">BOOK
                                                        SESSION</button>
                                        </div>
                                </div>
                        </div>
                </section>
                
                <section
                        className="border-t border-border-dark bg-surface-dim py-section-gap-sm md:py-section-gap-lg px-margin-mobile md:px-margin-desktop text-center">
                        <h2
                                className="font-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-6 max-w-2xl mx-auto">
                                READY TO START YOUR TRANSFORMATION?
                        </h2>
                        <Link href="/membership">
                            <button
                                className="bg-electric-blue text-obsidian-black font-headline-md text-headline-md px-10 py-4 rounded uppercase tracking-wider hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 transform hover:scale-105">
                                JOIN THE FORGE
                        </button></Link>    
                        
                </section>
        </main>
    );
}