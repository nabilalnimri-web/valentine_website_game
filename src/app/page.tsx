"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Zap, ChevronRight, Search } from "lucide-react";
import AlienCard from "@/components/AlienCard";
import { aliens } from "@/data/aliens";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const omnitrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Animation
      const tl = gsap.timeline();
      tl.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Spinning Omnitrix
      gsap.to(omnitrixRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "linear"
      });

      // Pulse Glow
      gsap.to(".omnitrix-glow", {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen" ref={heroRef}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-omnitrix-green/10 border border-omnitrix-green/20 text-omnitrix-green text-xs font-orbitron uppercase tracking-widest">
              <Zap className="w-3 h-3 fill-current" /> The Ultimate Ben 10 Encyclopedia
            </div>

            <h1 className="font-orbitron text-5xl md:text-7xl font-bold leading-tight">
              EXPLORE EVERY <span className="text-omnitrix-green text-glow-green">ALIEN</span>. EVERY <span className="text-white text-glow">HERO</span>.
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-exo">
              Dive into the most comprehensive database of the Omniverse. From the Original Series to the Reboot, discover every transformation and character.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/aliens" className="omnitrix-button flex items-center gap-2 group">
                Browse Aliens <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
                className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold transition-all flex items-center gap-2"
              >
                <Search className="w-5 h-5" /> Search Database
              </button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-omnitrix-green">80+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Aliens</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-omnitrix-green">500+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Characters</div>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-orbitron font-bold text-omnitrix-green">5</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40">Series</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* 3D-like Omnitrix Dial */}
            <div className="relative w-64 h-64 md:w-96 md:h-96">
               <div className="omnitrix-glow absolute inset-0 bg-omnitrix-green/20 rounded-full blur-[100px] opacity-50" />
               <div ref={omnitrixRef} className="relative z-10 w-full h-full border-[12px] border-omnitrix-charcoal rounded-full bg-black shadow-[inset_0_0_50px_rgba(0,255,0,0.2),0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50" />
                  <div className="w-full h-4 bg-omnitrix-green/20 absolute rotate-45" />
                  <div className="w-full h-4 bg-omnitrix-green/20 absolute -rotate-45" />
                  <div className="w-3/4 h-3/4 border-4 border-omnitrix-green/40 rounded-full flex items-center justify-center">
                    <div className="w-full h-full bg-omnitrix-green/10 rounded-full animate-pulse" />
                  </div>
                  <Zap className="w-24 h-24 md:w-32 md:h-32 text-omnitrix-green group-hover:scale-110 transition-transform duration-500 fill-current" />
               </div>

               {/* Orbital elements */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-omnitrix-green/10 rounded-full animate-[spin_30s_linear_infinite]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-omnitrix-green/5 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Aliens */}
      <section className="py-24 bg-gradient-to-b from-black to-omnitrix-charcoal/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">FEATURED <span className="text-omnitrix-green">ALIENS</span></h2>
              <p className="text-white/50 max-w-lg">
                The most iconic transformations in Ben&apos;s arsenal. Each with unique powers and abilities.
              </p>
            </div>
            <Link href="/aliens" className="text-omnitrix-green font-orbitron text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View All Aliens <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aliens.slice(0, 4).map((alien) => (
              <AlienCard key={alien.id} alien={alien} />
            ))}
          </div>
        </div>
      </section>

      {/* Series Timeline Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-omnitrix-green/30 to-transparent" />
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-16 text-center">THE <span className="text-omnitrix-green text-glow-green">OMNIVERSE</span> TIMELINE</h2>

           <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block" />

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
                 {[
                   { name: "Original Series", year: "2005", color: "bg-omnitrix-green" },
                   { name: "Alien Force", year: "2008", color: "bg-hero-blue" },
                   { name: "Ultimate Alien", year: "2010", color: "bg-villain-red" },
                   { name: "Omniverse", year: "2012", color: "bg-omnitrix-green-dark" },
                   { name: "Reboot", year: "2016", color: "bg-orange-500" },
                 ].map((series, i) => (
                   <motion.div
                    key={series.name}
                    whileHover={{ y: -10 }}
                    className="relative z-10 bg-omnitrix-charcoal/50 border border-white/10 p-6 rounded-2xl hover:border-omnitrix-green/30 transition-all group"
                   >
                     <div className={`w-12 h-12 rounded-full ${series.color} mb-4 flex items-center justify-center text-black font-bold group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                        {i + 1}
                     </div>
                     <h3 className="font-orbitron text-lg font-bold mb-1">{series.name}</h3>
                     <span className="text-white/40 text-xs font-orbitron">{series.year}</span>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
