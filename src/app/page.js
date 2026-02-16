"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tutors from './components/Tutors';
import FAQ from './components/Faq';
import Testi from './components/Testi';
import Footer from './components/Footer';
import Workflow from './components/Workflow';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';


export default function KodingHubDetail() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-orange-500/30">
      <Navbar />
      
      <Hero />
      <Services />
      <Workflow />
      <Tutors />
      <FAQ />
      <Testi />
      
      <Footer />

      {/* Floating WA */}
      <motion.a 
        href="https://wa.me/6281377845302"
        className="fixed bottom-8 right-8 z-[60] bg-green-500 p-4 rounded-full shadow-2xl"
        whileHover={{ scale: 1.1 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>
    </main>
  );
}