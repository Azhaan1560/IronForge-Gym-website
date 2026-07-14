import MembershipHero from "./components/MembershipHero"
//import Link from "next/link";

export default function membership() {
    return (
        <main className="flex-grow pt-[64px]">
            <MembershipHero />
            <section className="px-margin-mobile md:px-margin-desktop pb-section-gap-lg max-w-container-max mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                                <div
                                        className="bg-surface-card border border-border-dark rounded-none p-8 flex flex-col h-full electric-glow-hover transition-all duration-300">
                                        <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
                                                Basic</h3>
                                        <div className="flex items-baseline gap-1 mb-6">
                                                <span
                                                        className="font-headline-lg text-headline-lg text-electric-blue">$49</span>
                                                <span className="font-body-md text-metadata-grey">/mo</span>
                                        </div>
                                        <ul className="flex-grow space-y-4 mb-8">
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">24/7 Facility
                                                                Access</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">Access to Free Weights
                                                                &amp; Machines</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">Locker Room Access</span>
                                                </li>
                                        </ul>
                                        <button
                                                className="w-full border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase tracking-widest py-3 rounded hover:bg-electric-blue hover:text-obsidian-black transition-all duration-300">Get
                                                Started</button>
                                </div>
                        
                                <div className="bg-surface-card border border-electric-blue rounded-none p-8 flex flex-col h-full electric-glow relative transform md:-translate-y-4">
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-electric-blue text-obsidian-black font-label-bold text-[12px] uppercase tracking-widest px-4 py-1 rounded-sm">
                                                Most Popular</div>
                                        <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
                                                Standard</h3>
                                        <div className="flex items-baseline gap-1 mb-6">
                                                <span
                                                        className="font-headline-lg text-headline-lg text-electric-blue">$79</span>
                                                <span className="font-body-md text-metadata-grey">/mo</span>
                                        </div>
                                        <ul className="flex-grow space-y-4 mb-8">
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">24/7 Facility
                                                                Access</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">All Group ClassNamees
                                                                Included</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">1 Initial Personal
                                                                Consultation</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">Complimentary Towel
                                                                Service</span>
                                                </li>
                                        </ul>
                                        <button
                                                className="w-full border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase tracking-widest py-3 rounded hover:bg-electric-blue hover:text-obsidian-black transition-all duration-300">Get
                                                Started</button>
                                </div>
                                <div
                                        className="bg-surface-card border border-border-dark rounded-none p-8 flex flex-col h-full electric-glow-hover transition-all duration-300">
                                        <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">
                                                Premium</h3>
                                        <div className="flex items-baseline gap-1 mb-6">
                                                <span
                                                        className="font-headline-lg text-headline-lg text-electric-blue">$129</span>
                                                <span className="font-body-md text-metadata-grey">/mo</span>
                                        </div>
                                        <ul className="flex-grow space-y-4 mb-8">
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">All Standard
                                                                Features</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">1 Personal Training
                                                                Session / Month</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">Custom Nutrition
                                                                Plan</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                        <span
                                                                className="material-symbols-outlined text-electric-blue text-sm mt-1">check</span>
                                                        <span className="text-on-surface-variant">Recovery Lounge Access
                                                                (Sauna/Cold Plunge)</span>
                                                </li>
                                        </ul>
                                        <button
                                                className="w-full border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold uppercase tracking-widest py-3 rounded hover:bg-electric-blue hover:text-obsidian-black transition-all duration-300">Get
                                                Started</button>
                                </div>
                        </div>
            </section>
            <section
                        className="bg-obsidian-black py-section-gap-sm px-margin-mobile md:px-margin-desktop border-t border-border-dark">
                        <div className="max-w-container-max mx-auto">
                                <div className="text-center mb-12">
                                        <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">
                                                Frequently Asked Questions</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                        <div className="bg-surface-card p-6 border border-border-dark">
                                                <h4
                                                        className="font-headline-md text-headline-md text-on-surface mb-2 text-lg">
                                                        Is there a joining fee?</h4>
                                                <p className="text-on-surface-variant">No, we believe in transparent
                                                        pricing. The monthly fee is all you pay to start training.</p>
                                        </div>
                                        <div className="bg-surface-card p-6 border border-border-dark">
                                                <h4
                                                        className="font-headline-md text-headline-md text-on-surface mb-2 text-lg">
                                                        Can I cancel or pause my membership?</h4>
                                                <p className="text-on-surface-variant">Yes, memberships operate on a
                                                        month-to-month basis. You can pause or cancel with 30 days
                                                        notice.</p>
                                        </div>
                                        <div className="bg-surface-card p-6 border border-border-dark">
                                                <h4
                                                        className="font-headline-md text-headline-md text-on-surface mb-2 text-lg">
                                                        Are classNamees suitable for beginners?</h4>
                                                <p className="text-on-surface-variant">Absolutely. Our trainers provide
                                                        scaling options for all fitness levels in every class.</p>
                                        </div>
                                        <div className="bg-surface-card p-6 border border-border-dark">
                                                <h4
                                                        className="font-headline-md text-headline-md text-on-surface mb-2 text-lg">
                                                        What hours are you open?</h4>
                                                <p className="text-on-surface-variant">All members get 24/7 access via our
                                                        secure key fob system. Staffed hours are 6 AM to 9 PM daily.</p>
                                        </div>
                                </div>
                        </div>
                </section>
        </main>
    );

}