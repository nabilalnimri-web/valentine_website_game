"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon, X, User, Zap, Film } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { aliens } from "@/data/aliens";
import { characters } from "@/data/characters";

interface SearchResult {
  id: string;
  name: string;
  type: 'alien' | 'character';
  url: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    const openSearch = () => setIsOpen(true);

    document.addEventListener("keydown", down);
    window.addEventListener("open-search", openSearch);

    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-search", openSearch);
    };
  }, []);

  const results: SearchResult[] = query.length > 1 ? [
    ...aliens.filter(a => a.name.toLowerCase().includes(query.toLowerCase())).map(a => ({
      id: a.id,
      name: a.name,
      type: 'alien' as const,
      url: `/aliens/${a.id}`
    })),
    ...characters.filter(c => c.name.toLowerCase().includes(query.toLowerCase())).map(c => ({
      id: c.id,
      name: c.name,
      type: 'character' as const,
      url: `/characters/${c.id}`
    }))
  ] : [];

  const handleSelect = (url: string) => {
    router.push(url);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {/* Trigger Button (Invisible since Navbar handles it, or used globally) */}
      <div className="hidden">
        <kbd className="hidden md:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-omnitrix-charcoal border border-omnitrix-green/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <SearchIcon className="w-5 h-5 text-omnitrix-green" />
                <input
                  autoFocus
                  placeholder="Search aliens, characters, episodes..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder:text-white/30"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-md"
                  aria-label="Close Search"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {results.length > 0 ? (
                  <div className="space-y-1">
                    {results.map((result) => (
                      <button
                        key={`${result.type}-${result.id}`}
                        onClick={() => handleSelect(result.url)}
                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-omnitrix-green/10 text-left transition-colors group"
                        aria-label={`Go to ${result.name} ${result.type}`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-omnitrix-green/20 transition-colors">
                          {result.type === 'alien' ? <Zap className="w-5 h-5 text-omnitrix-green" /> : <User className="w-5 h-5 text-omnitrix-green" />}
                        </div>
                        <div>
                          <div className="font-orbitron text-sm font-bold">{result.name}</div>
                          <div className="text-xs text-white/50 uppercase tracking-widest">{result.type}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : query.length > 1 ? (
                  <div className="p-10 text-center text-white/50">
                    No results found for &quot;{query}&quot;
                  </div>
                ) : (
                  <div className="p-10 text-center text-white/30 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                      <SearchIcon className="w-8 h-8 opacity-20" />
                    </div>
                    <p className="font-orbitron text-sm">Start typing to search the Omniverse...</p>
                  </div>
                )}
              </div>

              <div className="p-3 bg-black/50 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 font-orbitron uppercase tracking-widest">
                <div className="flex gap-4">
                  <span><span className="text-white/60">↑↓</span> to navigate</span>
                  <span><span className="text-white/60">Enter</span> to select</span>
                </div>
                <span>ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
