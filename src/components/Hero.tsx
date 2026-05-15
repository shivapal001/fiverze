import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { CheckCircle2, Mail, Send } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    collegeName: '',
    contactPerson: '',
    email: '',
    phone: '',
    programInterestedIn: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const path = 'leads';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFormData({ collegeName: '', contactPerson: '', email: '', phone: '', programInterestedIn: '' });
    } catch (error) {
      setStatus('error');
      handleFirestoreError(error, OperationType.CREATE, 'leads');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-mesh">
      {/* Dynamic background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 blur-[160px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 blur-[160px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="section-label">Campus Integration</span>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold font-display leading-[0.9] mb-8 text-white"
          >
            Bring <span className="text-glow">Finverze</span> <br />
            To Your <span className="text-brand">Campus</span>
          </motion.h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-light">
            Empower your students with professional financial discipline programs and structured workshops designed for modern educational institutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Structured Delivery",
              "Student-Focused",
              "Easy Onboarding"
            ].map((point, index) => (
              <motion.div 
                key={point}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/5 border border-white/5 p-4 rounded-2xl"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-brand" />
                </div>
                <span className="text-slate-300 font-medium text-sm tracking-tight">{point}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5 w-fit">
            <Mail size={18} className="text-brand" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">For queries</span>
              <a href="mailto:founder@finverze.com" className="text-white font-medium hover:text-brand transition-colors text-sm">
                founder@finverze.com
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="contact"
          className="lg:col-span-5"
        >
          <div className="glass p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/10 transition-colors" />
            
            <h3 className="text-3xl font-bold mb-2">Book a Session</h3>
            <p className="text-slate-400 text-sm mb-8">Start your campus transformation today.</p>
            
            <form id="lead-form" onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <input 
                  type="text" 
                  required
                  className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all text-white placeholder:text-slate-600 text-sm"
                  placeholder="College Name"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({...formData, collegeName: e.target.value})}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all text-white placeholder:text-slate-600 text-sm"
                    placeholder="Contact Person"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  />
                  <input 
                    type="email" 
                    required
                    className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all text-white placeholder:text-slate-600 text-sm"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <input 
                  type="tel" 
                  required
                  className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all text-white placeholder:text-slate-600 text-sm"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />

                <select 
                  required
                  className="w-full bg-slate-950/40 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand transition-all text-white appearance-none text-sm cursor-pointer"
                  value={formData.programInterestedIn}
                  onChange={(e) => setFormData({...formData, programInterestedIn: e.target.value})}
                >
                  <option value="" disabled>Interested Program</option>
                  <option value="Financial Discipline Workshop">Financial Discipline Workshop</option>
                  <option value="Long-term Habits Program">Long-term Habits Program</option>
                  <option value="Campus Awareness Drive">Campus Awareness Drive</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full py-5 bg-brand text-white font-bold rounded-2xl transition-all flex items-center justify-center space-x-3 shadow-xl shadow-brand/20 active:scale-[0.98] mt-6 group/btn"
              >
                <span>{status === 'loading' ? 'Processing...' : 'Secure Your Session'}</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 text-sm text-center font-medium"
                >
                  Thank you! We'll reach out within 24 hours.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
