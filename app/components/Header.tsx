import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border-dark shadow-lg shadow-electric-blue/5 transition-all duration-300">
      <div className="grid grid-cols-3 items-center max-w-[1550px] mx-auto px-6 lg:px-8 py-4">

        {/* Logo */}
        <div className="justify-self-start">
          <a
            href="#"
            className="flex items-center gap-2 font-headline-md text-headline-md font-bold "
          >
            <Image
              src="/images/icon.jpg"
              alt="Iron Forge Anvil Icon"
              width={32}
              height={32}
              className="h-8 w-auto"
            />

            <span className="text-electric-blue font-bold uppercase tracking-tight">
              IRON FORGE
            </span>
          </a>
        </div>

        {/* Navigation */}
        <div className="justify-self-center">
          <div className="hidden md:flex items-center gap-8 font-label-bold text-label-bold uppercase tracking-widest">

            <Link
              className="text-on-surface-variant  border-b-2 border-transparent hover:border-electric-blue hover:text-electric-blue transition-all duration-200 pb-1"
              href="/"
            >
              Home
            </Link>

            <Link
              className="text-on-surface-variant  border-b-2 border-transparent hover:border-electric-blue hover:text-electric-blue transition-all duration-200 pb-1"
              href="/programs"
            >
              Programs
            </Link>

            <Link
              className="text-on-surface-variant border-b-2 border-transparent hover:border-electric-blue hover:text-electric-blue transition-all duration-200 pb-1"
              href="/trainers"
            >
              Trainers
            </Link>

            <Link
              className="text-on-surface-variant  border-b-2 border-transparent hover:border-electric-blue hover:text-electric-blue transition-all duration-200 pb-1"
              href="/membership"
            >
              Membership
            </Link>

            <Link
              className="text-on-surface-variant  border-b-2 border-transparent hover:border-electric-blue hover:text-electric-blue transition-all duration-200 pb-1"
              href="/gallery"
            >
              Gallery
            </Link>

          </div>
        </div>

        {/* Contact Button */}
        <div className="justify-self-end mr-6">
          <Link
            href="/contact"
            className="bg-electric-blue text-obsidian-black font-label-bold text-label-bold px-6 py-3 rounded uppercase hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}