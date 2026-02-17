"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Settings, Shield, Activity, Clock } from "lucide-react";

const OMNITRIX_VERSIONS = [
  {
    id: "os",
    name: "Original Omnitrix",
    series: "Ben 10 (Original)",
    description: "The first version created by Azmuth. Features a prototype design with a dial that pops up for transformation.",
    features: ["Alien Transformation", "Master Control (Locked)", "Self-Destruct Mode", "Genetic Repair"],
    color: "bg-omnitrix-green"
  },
  {
    id: "af",
    name: "Recalibrated Omnitrix",
    series: "Ben 10: Alien Force",
    description: "After years of inactivity, the Omnitrix recalibrated into a sleeker, watch-like form with a holographic interface.",
    features: ["Holographic Display", "Universal Translator", "New Playlist", "Data Dump"],
    color: "bg-omnitrix-green-dark"
  },
  {
    id: "ua",
    name: "Ultimatrix",
    series: "Ben 10: Ultimate Alien",
    description: "A gauntlet-style device that allows the user to 'evolve' aliens into their Ultimate forms.",
    features: ["Ultimate Evolution", "DNA Sampling", "Enhanced Strength", "Warp Navigation"],
    color: "bg-villain-red"
  },
  {
    id: "ov",
    name: "Official Omnitrix",
    series: "Ben 10: Omniverse",
    description: "The final, completed version of the Omnitrix. Stable and refined with the most advanced technology.",
    features: ["Touch Interface", "Randomizer Mode", "Life-Form Lock", "Failsafe System"],
    color: "bg-omnitrix-green"
  }
];

export default function OmnitrixPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-3xl mb-16">
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
          OMNITRIX <span className="text-omnitrix-green text-glow-green">SPECS</span>
        </h1>
        <p className="text-white/60 text-lg leading-relaxed font-exo">
          The most powerful device in the universe. Created by the smartest being in 3 galaxies, Azmuth of the Galvans. Explore the evolution of the watch.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-24">
        {OMNITRIX_VERSIONS.map((version, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={version.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`order-2 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
               <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-orbitron uppercase tracking-widest text-white/40">
                 {version.series}
               </div>
               <h2 className="font-orbitron text-3xl md:text-4xl font-bold uppercase tracking-tight">
                 {version.name}
               </h2>
               <p className="text-white/60 text-lg leading-relaxed">
                 {version.description}
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {version.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-omnitrix-green/30 transition-colors group">
                       <Settings className="w-4 h-4 text-omnitrix-green group-hover:rotate-90 transition-transform" />
                       <span className="text-sm font-bold uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className={`order-1 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}>
               <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className={`absolute inset-0 blur-[100px] opacity-20 rounded-full ${version.color}`} />
                  <div className="relative z-10 w-full h-full border-8 border-omnitrix-charcoal rounded-3xl bg-black flex items-center justify-center shadow-2xl overflow-hidden group">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30" />
                     <Zap className={`w-32 h-32 md:w-40 md:h-40 group-hover:scale-110 transition-transform duration-500 fill-current ${version.id === 'ua' ? 'text-villain-red' : 'text-omnitrix-green'}`} />

                     {/* Thematic overlays */}
                     {version.id === 'os' && <div className="absolute inset-0 border-t-8 border-white/10" />}
                     {version.id === 'af' && <div className="absolute inset-0 bg-gradient-to-tr from-omnitrix-green/5 to-transparent" />}
                     {version.id === 'ov' && <div className="absolute inset-4 border border-omnitrix-green/20 rounded-2xl" />}
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 glass-green p-12 rounded-3xl text-center space-y-8">
         <h2 className="font-orbitron text-3xl font-bold uppercase tracking-tight text-glow-green">Technical Overview</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechStat icon={<Cpu className="w-6 h-6" />} label="CPU" value="Galvan Core 9" />
            <TechStat icon={<Activity className="w-6 h-6" />} label="DNA Storage" value="Primus Stream" />
            <TechStat icon={<Clock className="w-6 h-6" />} label="Refresh Rate" value="10ms" />
            <TechStat icon={<Shield className="w-6 h-6" />} label="Firewall" value="Level 20" />
         </div>
      </div>
    </div>
  );
}

function TechStat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="space-y-3">
       <div className="w-12 h-12 rounded-2xl bg-omnitrix-green/10 flex items-center justify-center text-omnitrix-green mx-auto">
          {icon}
       </div>
       <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40 font-orbitron">{label}</div>
          <div className="text-sm font-bold uppercase">{value}</div>
       </div>
    </div>
  );
}
