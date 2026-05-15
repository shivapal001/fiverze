import { motion } from 'motion/react';
import { Sparkles, Trophy, Layers, Heart, LineChart } from 'lucide-react';

export default function WhyChoose() {
  const leftPoints = [
    { text: 'Enhances real-world student life skills', icon: Sparkles, desc: 'Teaching students how to manage their first paychecks and savings effectively.' },
    { text: 'Practical and structured implementation', icon: Layers, desc: 'We provide a clear 4-step framework that colleges can easily adopt.' },
    { text: 'Flexible workshop and program formats', icon: Heart, desc: 'Choose between deep-dive workshops or year-long engagement programs.' }
  ];

  const rightPoints = [
    { text: 'Adds value beyond academics', icon: Trophy, desc: 'Going beyond theory to build actual financial behavioral change.' },
    { text: 'Supports student behavioral development', icon: LineChart, desc: 'A long-term ecosystem for monitoring and improving financial habits.' }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <span className="section-label">Institutional Value</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-display"
          >
            Why Colleges Choose <span className="text-brand">Finverze</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {leftPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start space-x-6 p-8 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-brand/5 group-hover:border-brand/20 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand/10 group-hover:bg-brand group-hover:text-white flex items-center justify-center text-brand transition-all">
                    <point.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.text}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 lg:mt-24">
            {rightPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group relative"
              >
                <div className="flex items-start space-x-6 p-8 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-brand/5 group-hover:border-brand/20 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand/10 group-hover:bg-brand group-hover:text-white flex items-center justify-center text-brand transition-all">
                    <point.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{point.text}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
