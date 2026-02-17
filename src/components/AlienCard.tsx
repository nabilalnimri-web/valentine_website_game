"use client";

import { Alien } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Zap, Flame, Shield, Wind, Sparkles } from "lucide-react";

interface AlienCardProps {
  alien: Alien;
}

const SeriesBadges: Record<string, { label: string; color: string }> = {
  OS: { label: "Original", color: "bg-omnitrix-green text-black" },
  AF: { label: "Alien Force", color: "bg-hero-blue text-white" },
  UA: { label: "Ultimate Alien", color: "bg-villain-red text-white" },
  OV: { label: "Omniverse", color: "bg-omnitrix-green-dark text-white" },
  Reboot: { label: "Reboot", color: "bg-orange-500 text-white" },
};

export default function AlienCard({ alien }: AlienCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative bg-omnitrix-charcoal rounded-2xl border border-white/10 overflow-hidden hover:border-omnitrix-green/50 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]"
    >
      <Link
        href={`/aliens/${alien.id}`}
        className="block"
        aria-label={`View details for ${alien.name}`}
      >
        <div className="relative h-64 w-full bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center p-6">
          {/* Animated Background Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.15)_0%,transparent_70%)]" />
            {alien.id === "heatblast" && (
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            )}
          </div>

          <div className="relative z-10 w-full h-full transform group-hover:scale-110 transition-transform duration-500">
            <Image
              src={alien.images.primary}
              alt={alien.name}
              fill
              className="object-contain filter drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.4)]"
            />
          </div>

          {/* Hologram Overlay on Hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="p-5 space-y-3 relative">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-orbitron text-xl font-bold tracking-tight text-white group-hover:text-omnitrix-green transition-colors">
                {alien.name}
              </h3>
              <p className="text-white/40 text-xs uppercase tracking-widest font-orbitron">
                {alien.species}
              </p>
            </div>
            <div className="flex flex-wrap gap-1 justify-end max-w-[100px]">
              {alien.seriesAppearances.map((s) => (
                <span
                  key={s}
                  className={`text-[8px] px-1.5 py-0.5 rounded font-bold uppercase ${SeriesBadges[s].color}`}
                  title={SeriesBadges[s].label}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {alien.abilities.slice(0, 3).map((ability, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-omnitrix-green group-hover:bg-omnitrix-green/20 transition-colors"
                title={ability.name}
              >
                {ability.icon === 'fire' && <Flame className="w-4 h-4" />}
                {ability.icon === 'flame' && <Flame className="w-4 h-4" />}
                {ability.icon === 'shield' && <Shield className="w-4 h-4" />}
                {ability.icon === 'zap' && <Zap className="w-4 h-4" />}
                {ability.icon === 'wind' && <Wind className="w-4 h-4" />}
                {ability.icon === 'sparkles' && <Sparkles className="w-4 h-4" />}
                {!ability.icon && <Zap className="w-4 h-4" />}
              </div>
            ))}
          </div>

          <div className="pt-2">
             <div className="h-1 w-0 group-hover:w-full bg-omnitrix-green transition-all duration-500 rounded-full" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
