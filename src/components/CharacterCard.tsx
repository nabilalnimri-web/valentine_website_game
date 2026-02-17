"use client";

import { Character } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { User, Shield, Zap, Skull } from "lucide-react";
import { cn } from "@/lib/utils";

interface CharacterCardProps {
  character: Character;
}

const AlignmentColors: Record<string, string> = {
  Hero: "shadow-omnitrix-green/20 border-omnitrix-green/20 group-hover:border-omnitrix-green/50 hover:shadow-omnitrix-green/40",
  Villain: "shadow-villain-red/20 border-villain-red/20 group-hover:border-villain-red/50 hover:shadow-villain-red/40",
  Neutral: "shadow-white/10 border-white/10 group-hover:border-white/30 hover:shadow-white/20",
  "Anti-Hero": "shadow-villain-purple/20 border-villain-purple/20 group-hover:border-villain-purple/50 hover:shadow-villain-purple/40",
};

const AlignmentText: Record<string, string> = {
  Hero: "text-omnitrix-green",
  Villain: "text-villain-red",
  Neutral: "text-white/60",
  "Anti-Hero": "text-villain-purple",
};

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className={cn(
        "group relative bg-omnitrix-charcoal rounded-2xl border overflow-hidden transition-all duration-300 shadow-xl",
        AlignmentColors[character.alignment]
      )}
    >
      <Link
        href={`/characters/${character.id}`}
        className="block"
        aria-label={`View dossier for ${character.name}`}
      >
        <div className="relative h-72 w-full bg-gradient-to-b from-black/50 to-transparent flex items-center justify-center p-4">
          <div className="relative z-10 w-full h-full transform group-hover:scale-110 transition-transform duration-500">
            <Image
              src={character.images.primary}
              alt={character.name}
              fill
              className="object-contain filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Signature Animation Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
             {character.alignment === 'Hero' && (
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,transparent_70%)] animate-pulse" />
             )}
             {character.alignment === 'Villain' && (
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_70%)] animate-pulse" />
             )}
          </div>
        </div>

        <div className="p-5 space-y-2">
          <div className="flex justify-between items-center">
            <span className={cn("text-[10px] font-orbitron uppercase tracking-[0.2em]", AlignmentText[character.alignment])}>
              {character.alignment}
            </span>
            <div className="flex gap-1">
              {character.seriesAppearances.map(s => (
                <span key={s} className="text-[8px] bg-white/10 text-white/60 px-1 rounded uppercase">{s}</span>
              ))}
            </div>
          </div>

          <h3 className="font-orbitron text-xl font-bold tracking-tight text-white group-hover:text-glow-green transition-all">
            {character.name}
          </h3>

          <p className="text-white/40 text-xs uppercase tracking-widest font-orbitron line-clamp-1">
            {character.species} • {character.homePlanet}
          </p>

          <div className="pt-3 flex gap-3">
             <div className="flex items-center gap-1 text-[10px] text-white/40 font-orbitron">
               <Shield className="w-3 h-3" /> {character.affiliations[0] || "Unknown"}
             </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
