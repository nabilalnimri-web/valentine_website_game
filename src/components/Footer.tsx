import Link from "next/link";
import { Zap, Github, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-omnitrix-black border-t border-omnitrix-green/20 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-omnitrix-green flex items-center justify-center">
                <Zap className="text-black w-5 h-5 fill-current" />
              </div>
              <span className="font-orbitron text-lg font-bold tracking-tighter text-glow-green">
                OMNITRIX<span className="text-white">DB</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              The most comprehensive Ben 10 encyclopedia in the galaxy.
              Explore every alien, character, and series from the Omniverse.
            </p>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold uppercase tracking-widest mb-6 text-omnitrix-green">Database</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/aliens" className="hover:text-white transition-colors">Aliens</Link></li>
              <li><Link href="/characters" className="hover:text-white transition-colors">Characters</Link></li>
              <li><Link href="/species" className="hover:text-white transition-colors">Species</Link></li>
              <li><Link href="/planets" className="hover:text-white transition-colors">Planets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold uppercase tracking-widest mb-6 text-omnitrix-green">Resources</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/series" className="hover:text-white transition-colors">Series Guide</Link></li>
              <li><Link href="/episodes" className="hover:text-white transition-colors">Episode Guide</Link></li>
              <li><Link href="/omnitrix" className="hover:text-white transition-colors">Omnitrix Specs</Link></li>
              <li><Link href="/timeline" className="hover:text-white transition-colors">Franchise Timeline</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron text-sm font-bold uppercase tracking-widest mb-6 text-omnitrix-green">Connect</h4>
            <div className="flex gap-4">
              <button
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-omnitrix-green hover:text-black transition-all"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-omnitrix-green hover:text-black transition-all"
                aria-label="Watch us on Youtube"
              >
                <Youtube className="w-5 h-5" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-omnitrix-green hover:text-black transition-all"
                aria-label="View source on Github"
              >
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} The Omnitrix Database. This is a fan-made project.
            Ben 10 is property of Cartoon Network & Warner Bros. Discovery.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-tighter text-white/20 font-orbitron">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-white">Legal Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
