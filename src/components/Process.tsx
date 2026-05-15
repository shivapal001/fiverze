import { motion } from 'motion/react';
import { Search, PenTool, Layout, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: 'Initial Consultation',
      description: 'Discuss campus goals, student challenges, and implementation strategy.'
    },
    {
      icon: PenTool,
      title: 'Program Planning',
      description: 'Create a customized financial discipline roadmap for students.'
    },
    {
      icon: Layout,
      title: 'Campus Session Delivery',
      description: 'Conduct workshops, training sessions, and engagement activities.'
    },
    {
      icon: TrendingUp,
      title: 'Engagement & Habits',
      description: 'Help students build long-term financial discipline habits.'
    }
  ];

  return (
    <section id="programs" className="py-32 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-24 text-center">
          <span className="section-label">Workflow</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display"
          >
            Simple Implementation <span className="text-brand">Process</span>
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[120px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center group"
            >
              <span className="absolute top-6 right-8 font-mono text-sm tracking-tighter text-white/10 font-bold group-hover:text-brand/30 transition-colors">
                0{index + 1}
              </span>
              
              <div className="w-20 h-20 rounded-2xl bg-slate-950 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-brand/5 blur-xl group-hover:bg-brand/20 transition-colors rounded-full" />
                <step.icon size={36} className="text-brand relative z-10" />
              </div>
              
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-brand transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
