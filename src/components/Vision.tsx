import { motion } from 'motion/react';
import { Building2, Settings2, Rocket, Share2 } from 'lucide-react';

export default function Vision() {
  const visionCards = [
    { text: 'Building financially disciplined campuses', icon: Building2 },
    { text: 'Creating habit-driven financial systems', icon: Settings2 },
    { text: 'Expanding student financial awareness nationwide', icon: Rocket },
    { text: 'Developing a long-term financial growth ecosystem', icon: Share2 }
  ];

  return (
    <section id="vision" className="py-32 relative bg-brand/5 overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full font-display font-black text-[15rem] leading-none text-white/[0.02] select-none pointer-events-none -translate-y-1/2">
        VISION
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="section-label">Foundational Goals</span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold font-display"
            >
              The Long-Term <br />
              <span className="text-brand">Generation Impact</span>
            </motion.h2>
          </div>
          <div className="max-w-sm">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed font-light"
            >
              Our vision is to build a generation with strong financial discipline from an early stage, building habit-driven campuses.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[3rem] flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 card-hover"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white text-slate-950 flex items-center justify-center shadow-xl shadow-white/5">
                <card.icon size={28} />
              </div>
              <p className="text-2xl font-bold tracking-tight text-white/90">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
