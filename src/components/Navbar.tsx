import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Vision', href: '#vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="glass px-6 h-16 flex items-center justify-between rounded-2xl border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-3"
        >
          <div className="w-8 h-8 relative">
            <img 
              src="/logo.svg" 
              alt="VZ" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white">
            FIN<span className="text-brand">VERZE</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-5 py-2 bg-white text-slate-950 text-[11px] font-bold uppercase tracking-wider rounded-lg hover:bg-slate-100 transition-colors"
          >
            Book Session
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-0 right-0 glass px-6 py-8 rounded-2xl md:hidden space-y-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-mono uppercase tracking-widest text-slate-300 hover:text-brand"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-4 bg-brand text-white font-bold rounded-xl"
          >
            Book a Session
          </a>
        </motion.div>
      )}
    </nav>
  );
}
