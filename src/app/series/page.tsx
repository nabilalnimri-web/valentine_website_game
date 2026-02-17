"use client";

import { motion } from "framer-motion";
import { Calendar, Film, Zap, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const SERIES_DATA = [
  {
    id: "os",
    name: "Ben 10",
    subtitle: "The Original Series",
    year: "2005-2008",
    episodes: 52,
    seasons: 4,
    description: "The story of Ben Tennyson, a 10-year-old boy who discovers a mysterious alien device, the Omnitrix, which allows him to transform into 10 different alien species.",
    color: "bg-omnitrix-green",
    highlights: ["First transformation: Heatblast", "Introduction of Vilgax", "Secret of the Omnitrix movie"]
  },
  {
    id: "af",
    name: "Ben 10: Alien Force",
    subtitle: "The Next Generation",
    year: "2008-2010",
    episodes: 46,
    seasons: 3,
    description: "Five years after the original series, a teenage Ben must once again don the Omnitrix to find his missing Grandpa Max and stop a secret Highbreed invasion.",
    color: "bg-hero-blue",
    highlights: ["New Alien Playlist", "Kevin Levin joins the team", "Alien X debut"]
  },
  {
    id: "ua",
    name: "Ben 10: Ultimate Alien",
    subtitle: "Evolve Your Aliens",
    year: "2010-2012",
    episodes: 52,
    seasons: 3,
    description: "After the Omnitrix is destroyed, Ben gains the Ultimatrix, allowing him to evolve his aliens into powerful Ultimate forms while dealing with his newfound global fame.",
    color: "bg-villain-red",
    highlights: ["Ultimate Transformations", "Aggregor Arc", "The Map of Infinity"]
  },
  {
    id: "ov",
    name: "Ben 10: Omniverse",
    subtitle: "The New Beginning",
    year: "2012-2014",
    episodes: 80,
    seasons: 8,
    description: "Ben gets a new Omnitrix and a new partner, Rook Blonko. Together they explore the secret alien city, Undertown, and face threats across time and space.",
    color: "bg-omnitrix-green-dark",
    highlights: ["Undertown", "Multiverse Battles", "Malware Arc"]
  },
  {
    id: "reboot",
    name: "Ben 10 (Reboot)",
    subtitle: "Modern Reimagining",
    year: "2016-2021",
    episodes: 172,
    seasons: 4,
    description: "A fresh take on the 10-year-old Ben's adventures, introducing new aliens like Shock Rock and Slapback while reimagining classic villains.",
    color: "bg-orange-500",
    highlights: ["Omni-Enhanced Aliens", "Ben Gen 10 Crossover", "Alien V"]
  }
];

export default function SeriesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      <div className="max-w-3xl mb-16">
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
          SERIES <span className="text-omnitrix-green text-glow-green">GUIDE</span>
        </h1>
        <p className="text-white/60 text-lg leading-relaxed font-exo">
          Follow Ben Tennyson&apos;s journey from a 10-year-old kid with a watch to the hero of the universe. Explore every era of the Ben 10 franchise.
        </p>
      </div>

      <div className="space-y-32">
        {SERIES_DATA.map((series, i) => (
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={series.id}
            className="relative"
          >
            {/* Background number */}
            <div className="absolute -top-12 -left-8 text-[120px] font-orbitron font-black text-white/5 select-none leading-none z-0">
              0{i + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-orbitron uppercase tracking-widest text-white/40 mb-6">
                   <Calendar className="w-3 h-3" /> {series.year}
                 </div>
                 <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-2 uppercase tracking-tight">{series.name}</h2>
                 <p className="font-orbitron text-omnitrix-green text-sm uppercase tracking-[0.2em] mb-6">{series.subtitle}</p>

                 <p className="text-white/60 text-lg leading-relaxed mb-8">
                   {series.description}
                 </p>

                 <div className="flex gap-8 mb-8">
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/30 font-orbitron">Seasons</span>
                       <span className="text-2xl font-bold font-orbitron">{series.seasons}</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] uppercase tracking-widest text-white/30 font-orbitron">Episodes</span>
                       <span className="text-2xl font-bold font-orbitron">{series.episodes}</span>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <h4 className="text-xs font-orbitron font-bold uppercase tracking-widest text-white/40">Key Highlights</h4>
                    {series.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-white/70">
                         <Star className={`w-3 h-3 ${series.id === 'ua' ? 'text-villain-red' : 'text-omnitrix-green'}`} />
                         {highlight}
                      </div>
                    ))}
                 </div>
              </div>

              <div className={`flex justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                 <div className="relative group w-full max-w-md aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                    <div className={`absolute inset-0 ${series.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Film className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Placeholder for actual series poster/art */}
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                       <button className="flex items-center gap-2 text-xs font-orbitron uppercase tracking-widest hover:text-omnitrix-green transition-colors">
                         Explore Era <ChevronRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Franchise Timeline CTA */}
      <div className="mt-40 text-center space-y-8 py-20 border-y border-white/5">
         <h2 className="font-orbitron text-4xl font-bold uppercase tracking-tight">The Complete <span className="text-glow-green text-omnitrix-green">Timeline</span></h2>
         <p className="text-white/40 max-w-xl mx-auto">
           From the birth of the Omniverse to the distant future of Ben 10,000.
           Follow every major event in chronological order.
         </p>
         <button className="omnitrix-button">
           Open Interactive Timeline
         </button>
      </div>
    </div>
  );
}
