import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative min-h-[500px] sm:h-[500px] md:h-[600px] overflow-hidden">

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
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-margin-mobile md:px-margin-desktop py-16 sm:py-0 min-h-[500px] sm:h-full">
        <h1 className="font-display-lg text-3xl sm:text-headline-lg-mobile md:text-display-lg text-on-surface uppercase mb-4 sm:mb-6 tracking-tight drop-shadow-lg leading-tight">
          <span className="text-electric-blue block mb-1 sm:mb-2">
            IRON FORGE
          </span>
          GYM
        </h1>

        <p className="font-headline-md text-sm sm:text-headline-md text-on-surface-variant uppercase tracking-wider mb-6 sm:mb-12 max-w-2xl px-2">
          FORGED IN STRENGTH. BUILT FOR PRECISION.
        </p>

        <div className="flex flex-row flex-nowrap justify-center gap-2 sm:gap-4 w-full px-2">
          <Link
            href="/membership"
            className="bg-electric-blue text-obsidian-black font-label-bold text-label-bold px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base rounded uppercase tracking-widest hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
          >
            JOIN THE FORGE
          </Link>

          <Link
            href="/contact"
            className="border-2 border-electric-blue text-electric-blue font-label-bold text-label-bold px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base rounded uppercase tracking-widest hover:bg-electric-blue/10 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
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