"use client";

import { useParams, useRouter } from "next/navigation";
import { characters } from "@/data/characters";
import { motion } from "framer-motion";
import { Shield, Info, Heart } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CharacterDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const character = characters.find((c) => c.id === id);

  if (!character) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-orbitron font-bold mb-4">Character Not Found</h1>
        <button onClick={() => router.back()} className="omnitrix-button">Go Back</button>
      </div>
    );
  }

  const alignmentColor = character.alignment === 'Hero' ? 'text-omnitrix-green' :
                         character.alignment === 'Villain' ? 'text-villain-red' :
                         character.alignment === 'Anti-Hero' ? 'text-villain-purple' : 'text-white';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-omnitrix-charcoal to-black">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
           >
              <div className={cn("font-orbitron text-sm font-bold uppercase tracking-[0.3em]", alignmentColor)}>
                {character.alignment} Dossier
              </div>
              <h1 className="font-orbitron text-5xl md:text-7xl font-bold uppercase tracking-tight">
                {character.name}
              </h1>
              {character.fullName && (
                <p className="text-xl text-white/40 font-orbitron">{character.fullName}</p>
              )}
              <div className="flex flex-wrap gap-3">
                 {character.aliases.map(alias => (
                   <span key={alias} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60">
                     {alias}
                   </span>
                 ))}
              </div>
           </motion.div>

           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
           >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className={cn("absolute inset-0 blur-[100px] opacity-20 rounded-full",
                  character.alignment === 'Hero' ? 'bg-omnitrix-green' : 'bg-villain-red'
                )} />
                <Image
                  src={character.images.primary}
                  alt={character.name}
                  fill
                  priority
                  className="relative z-10 object-contain filter drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                />
              </div>
           </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Bio & Details */}
        <div className="lg:col-span-2 space-y-12">
           <div>
              <h2 className="font-orbitron text-3xl font-bold mb-6 border-b border-white/10 pb-4">BIOGRAPHY</h2>
              <p className="text-white/60 text-lg leading-relaxed font-exo">
                {character.biography}
              </p>
           </div>

           <div>
              <h2 className="font-orbitron text-3xl font-bold mb-8">POWERS & <span className="text-omnitrix-green">EQUIPMENT</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {character.abilities.map((ability, i) => (
                   <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                      <h4 className="font-orbitron font-bold text-omnitrix-green mb-2 uppercase">{ability.name}</h4>
                      <p className="text-sm text-white/50">{ability.description}</p>
                   </div>
                 ))}
                 {character.equipment.map((eq, i) => (
                   <div key={i} className="bg-omnitrix-green/5 p-6 rounded-2xl border border-omnitrix-green/20">
                      <h4 className="font-orbitron font-bold text-white mb-2 uppercase flex items-center gap-2">
                        <Shield className="w-4 h-4 text-omnitrix-green" /> {eq}
                      </h4>
                      <p className="text-sm text-white/40 tracking-wider">Standard Equipment</p>
                   </div>
                 ))}
              </div>
           </div>

           <div>
              <h2 className="font-orbitron text-3xl font-bold mb-8">RELATIONSHIPS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {character.relatives.map((rel, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                       <Heart className="w-4 h-4 text-villain-red fill-current" />
                       <span className="text-sm font-bold">{rel}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-1">
           <div className="glass p-8 rounded-3xl sticky top-24 space-y-8">
              <h3 className="font-orbitron text-xl font-bold mb-6 text-glow-green uppercase">Dossier Info</h3>

              <div className="space-y-6">
                <InfoRow label="Species" value={character.species} />
                <InfoRow label="Origin" value={character.homePlanet} />
                <InfoRow label="Gender" value={character.gender} />
                <InfoRow label="Status" value={character.status} />
                <div className="pt-4 border-t border-white/10">
                   <div className="text-[10px] uppercase tracking-widest text-white/30 font-orbitron mb-2">Affiliations</div>
                   <div className="flex flex-wrap gap-2">
                      {character.affiliations.map(aff => (
                        <span key={aff} className="text-xs font-bold text-omnitrix-green bg-omnitrix-green/10 px-2 py-1 rounded">
                          {aff}
                        </span>
                      ))}
                   </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                   <div className="text-[10px] uppercase tracking-widest text-white/30 font-orbitron mb-3">Series Appearances</div>
                   <div className="flex gap-2">
                      {character.seriesAppearances.map(s => (
                        <span key={s} className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-[10px] font-bold">
                          {s}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center group">
       <span className="text-white/40 text-xs font-orbitron uppercase tracking-widest group-hover:text-white/60 transition-colors">{label}</span>
       <span className="text-sm font-bold group-hover:text-omnitrix-green transition-colors">{value}</span>
    </div>
  );
}
