import { motion } from 'motion/react';
import { Target, Wallet, BadgeCheck, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    { title: 'Better spending habits', icon: Wallet, size: 'col-span-2' },
    { title: 'Saving discipline', icon: Target, size: 'col-span-2' },
    { title: 'Smarter financial decisions', icon: Zap, size: 'col-span-2' },
    { title: 'Real-world confidence', icon: BadgeCheck, size: 'col-span-3' },
    { title: 'Financial awareness', icon: ShieldCheck, size: 'col-span-3' },
    { title: 'Long-term money mindset', icon: Globe, size: 'col-span-6' }
  ];

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="section-label">Deliverables</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display"
          >
            What Students <br />
            <span className="text-brand">Actually Build</span>
          </motion.h2>
        </div>

        <div className="bento-grid">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${outcome.size} glass-card p-8 rounded-3xl flex flex-col justify-between group cursor-default`}
            >
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                <outcome.icon size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mt-12 group-hover:text-brand transition-colors">
                {outcome.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
