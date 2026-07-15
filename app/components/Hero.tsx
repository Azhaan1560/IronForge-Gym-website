import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero2.png"
          alt="Industrial Gym"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop">
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-6 tracking-tight drop-shadow-lg">
          <span className="text-electric-blue block mb-2">
            IRON FORGE
          </span>
          GYM
        </h1>

        <p className="font-headline-md text-headline-md text-on-surface-variant uppercase tracking-wider mb-12 max-w-2xl">
          FORGED IN STRENGTH. BUILT FOR PRECISION.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/membership"
            className="bg-electric-blue text-obsidian-black font-label-bold text-label-bold px-8 py-4 rounded uppercase tracking-widest hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1"
          >
            JOIN THE FORGE
          </Link>

          <Link
            href="/contact"
            className="border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-electric-blue/10 transition-all duration-300 hover:-translate-y-1"
          >
            BOOK FREE TRIAL
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <span className="material-symbols-outlined text-electric-blue text-4xl">
          stat_minus_2
        </span>
      </div>

    </header>
  );
}