import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-40 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-brand/5 blur-[160px] rounded-full -translate-x-1/2" />
      <div className="absolute inset-0 bg-brand-secondary/5 blur-[160px] rounded-full translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-16 md:p-24 rounded-[4rem] border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-12 leading-tight relative z-10">
            Start Building Financially <br className="hidden md:block" />
            <span className="text-brand">Disciplined</span> Students Today.
          </h2>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center space-x-3 px-12 py-6 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-100 transition-all shadow-2xl shadow-white/10 text-xl relative z-10"
          >
            <span>Schedule a Discussion</span>
            <ArrowRight size={22} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
