"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/programs", label: "Programs" },
    { href: "/trainers", label: "Trainers" },
    { href: "/membership", label: "Membership" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border-dark shadow-lg shadow-electric-blue/5 transition-all duration-300">
      <div className="grid grid-cols-3 items-center max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Logo */}
        <div className="justify-self-start">
          <a
            href="#"
            className="flex items-center gap-2 font-headline-md text-headline-md font-bold"
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

        {/* Desktop Navigation — centered */}
        <div className="justify-self-center hidden md:flex items-center gap-8 font-label-bold text-label-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-on-surface-variant border-b-2 border-transparent hover:border-electric-blue hover:text-electric-blue transition-all duration-200 pb-1"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="justify-self-end flex items-center gap-4">
          {/* Desktop Contact Button */}
          <Link
            href="/contact"
            className="hidden md:block bg-electric-blue text-obsidian-black font-label-bold text-label-bold px-6 py-3 rounded uppercase hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Contact Us
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-4 px-4 pb-6 pt-2 bg-background/95 backdrop-blur-md border-t border-border-dark">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-on-surface-variant font-label-bold text-label-bold uppercase tracking-widest hover:text-electric-blue transition-colors duration-200 py-1"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-electric-blue text-obsidian-black font-label-bold text-label-bold px-6 py-3 rounded uppercase hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 mt-2 w-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}