import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-32 pb-16 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <img src="/logo.svg" alt="" className="w-10 h-10 object-contain" />
              <span className="text-3xl font-display font-bold tracking-tighter text-white">
                FIN<span className="text-brand">VERZE</span>
              </span>
            </div>
            <p className="text-slate-500 text-lg max-w-sm font-light leading-relaxed">
              Empowering the next generation of campuses with professional financial discipline and structured behavioral programs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs font-mono">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-400 hover:text-brand transition-colors">About Story</a></li>
              <li><a href="#programs" className="text-slate-400 hover:text-brand transition-colors">Campus Programs</a></li>
              <li><a href="#vision" className="text-slate-400 hover:text-brand transition-colors">Future Vision</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand transition-colors">Work With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs font-mono">Contact Info</h4>
            <div className="flex items-center space-x-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <a href="mailto:founder@finverze.com" className="text-slate-400 hover:text-white transition-colors">
                founder@finverze.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} FINVERZE. Crafted for modern campuses.
          </p>
          <div className="flex space-x-12 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-400">Privacy Protocols</a>
            <a href="#" className="hover:text-slate-400">Legal Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
