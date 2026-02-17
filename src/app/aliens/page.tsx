"use client";

import { useState } from "react";
import { aliens } from "@/data/aliens";
import AlienCard from "@/components/AlienCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function AliensPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeries, setSelectedSeries] = useState<string>("All");

  const filteredAliens = aliens.filter(alien => {
    const matchesSearch = alien.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          alien.species.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSeries = selectedSeries === "All" || alien.seriesAppearances.includes(selectedSeries as any);
    return matchesSearch && matchesSeries;
  });

  const seriesOptions = ["All", "OS", "AF", "UA", "OV", "Reboot"];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold">
            ALIEN <span className="text-omnitrix-green">DATABASE</span>
          </h1>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-omnitrix-green transition-colors" />
            <input
              type="text"
              placeholder="Search by name or species..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-omnitrix-charcoal border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-omnitrix-green/50 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 border-b border-white/5 pb-6">
          <div className="flex items-center gap-2 text-white/40 mr-4">
            <Filter className="w-4 h-4" />
            <span className="font-orbitron text-xs uppercase tracking-widest">Filter by Series:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {seriesOptions.map((series) => (
              <button
                key={series}
                onClick={() => setSelectedSeries(series)}
                className={`px-4 py-1.5 rounded-full font-orbitron text-xs uppercase tracking-widest transition-all ${
                  selectedSeries === series
                    ? "bg-omnitrix-green text-black font-bold shadow-[0_0_15px_rgba(0,255,0,0.3)]"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {series === "All" ? "All Series" : series}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredAliens.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredAliens.map((alien) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              key={alien.id}
            >
              <AlienCard alien={alien} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="py-24 text-center">
          <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-white/20" />
          </div>
          <h3 className="font-orbitron text-xl font-bold mb-2">No aliens found</h3>
          <p className="text-white/40">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
