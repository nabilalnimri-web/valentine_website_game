"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NavLinks = [
  { name: "Aliens", href: "/aliens" },
  { name: "Characters", href: "/characters" },
  { name: "Omnitrix", href: "/omnitrix" },
  { name: "Series", href: "/series" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-omnitrix-green/20 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-omnitrix-green flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all">
            <Zap className="text-black w-6 h-6 fill-current" />
          </div>
          <span className="font-orbitron text-xl font-bold tracking-tighter text-glow-green">
            OMNITRIX<span className="text-white">DB</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-orbitron text-sm uppercase tracking-widest hover:text-omnitrix-green transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Open Search"
          >
            <Search className="w-5 h-5 text-omnitrix-green" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            className="p-2"
            aria-label="Open Search"
          >
            <Search className="w-5 h-5 text-omnitrix-green" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-omnitrix-black border-b border-omnitrix-green/20 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-orbitron text-lg py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated accent line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-omnitrix-green to-transparent opacity-30 animate-pulse-slow" />
    </nav>
  );
}
