"use client";

import { useParams, useRouter } from "next/navigation";
import { aliens } from "@/data/aliens";
import { motion } from "framer-motion";
import { Zap, Globe, User, Info, Flame, Activity } from "lucide-react";
import Image from "next/image";

export default function AlienDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const alien = aliens.find((a) => a.id === id);

  if (!alien) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-orbitron font-bold mb-4">Alien Not Found</h1>
        <button onClick={() => router.back()} className="omnitrix-button">Go Back</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.2)_0%,transparent_70%)]" />
          {/* Background based on alien type/id could be added here */}
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 md:w-96 md:h-96"
           >
              <Image
                src={alien.images.primary}
                alt={alien.name}
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_30px_rgba(0,255,0,0.4)]"
              />
           </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8"
           >
              <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-glow-green uppercase tracking-tighter">
                {alien.name}
              </h1>
              <div className="flex justify-center gap-4 mt-4">
                {alien.seriesAppearances.map(s => (
                  <span key={s} className="px-3 py-1 bg-omnitrix-green/20 border border-omnitrix-green/30 rounded-full text-xs font-orbitron text-omnitrix-green uppercase">
                    {s}
                  </span>
                ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 md:px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Stats */}
        <div className="lg:col-span-1 space-y-8">
           <div className="glass-green p-6 rounded-2xl space-y-6">
              <h3 className="font-orbitron text-lg font-bold flex items-center gap-2 border-b border-omnitrix-green/20 pb-4">
                <Info className="w-5 h-5 text-omnitrix-green" /> QUICK STATS
              </h3>

              <div className="grid grid-cols-1 gap-4">
                <StatItem label="Species" value={alien.species} icon={<Zap className="w-4 h-4" />} />
                <StatItem label="Home Planet" value={alien.homePlanet} icon={<Globe className="w-4 h-4" />} />
                <StatItem label="Body Type" value={alien.bodyType} icon={<User className="w-4 h-4" />} />
                <StatItem label="First Appearance" value={alien.firstAppearance.episode} icon={<Activity className="w-4 h-4" />} />
              </div>

              <div className="pt-4">
                <h4 className="text-white/40 text-[10px] uppercase tracking-widest mb-3 font-orbitron">Voice Actors</h4>
                <div className="space-y-2">
                   {alien.voiceActors.map((va, i) => (
                     <div key={i} className="text-sm">
                       <span className="text-white font-bold">{va.name}</span>
                       <span className="text-white/40 text-xs ml-2 uppercase">({va.series})</span>
                     </div>
                   ))}
                </div>
              </div>
           </div>

           <div className="glass p-6 rounded-2xl">
              <h3 className="font-orbitron text-lg font-bold mb-6">WEAKNESSES</h3>
              <ul className="space-y-3">
                {alien.weaknesses.map((w, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/70">
                    <span className="text-villain-red">•</span> {w}
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* Right Column - Powers & Gallery */}
        <div className="lg:col-span-2 space-y-12">
           <div>
              <h2 className="font-orbitron text-3xl font-bold mb-8 flex items-center gap-4">
                POWERS & <span className="text-omnitrix-green">ABILITIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {alien.abilities.map((ability, i) => (
                   <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-omnitrix-green/30 transition-all"
                   >
                      <div className="w-10 h-10 rounded-xl bg-omnitrix-green/10 flex items-center justify-center text-omnitrix-green mb-4">
                        {ability.icon === 'fire' ? <Flame className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                      </div>
                      <h4 className="font-orbitron font-bold mb-2 uppercase tracking-wide">{ability.name}</h4>
                      <p className="text-sm text-white/50">{ability.description}</p>
                   </motion.div>
                 ))}
              </div>
           </div>

           <div>
              <h2 className="font-orbitron text-3xl font-bold mb-8">BIOGRAPHY</h2>
              <p className="text-white/60 text-lg leading-relaxed font-exo">
                {alien.description}
              </p>
           </div>

           <div>
              <h2 className="font-orbitron text-3xl font-bold mb-8">TRIVIA</h2>
              <div className="bg-omnitrix-charcoal border-l-4 border-omnitrix-green p-6 space-y-4">
                 {alien.trivia.map((t, i) => (
                   <p key={i} className="text-white/70 text-sm italic">
                     &quot;{t}&quot;
                   </p>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/30 group-hover:text-omnitrix-green transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-orbitron">{label}</div>
        <div className="text-sm font-bold text-white group-hover:text-omnitrix-green transition-colors">{value}</div>
      </div>
    </div>
  );
}
