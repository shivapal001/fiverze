/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Outcomes from './components/Outcomes';
import Vision from './components/Vision';
import WhyChoose from './components/WhyChoose';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChoose />
      <Process />
      <Outcomes />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
}
