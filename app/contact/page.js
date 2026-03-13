'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      style={{ padding: '150px 10% 0 10%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '0.75rem', letterSpacing: '6px', opacity: 0.3, fontWeight: 'bold', textTransform: 'uppercase' }}>
          Secure_Channel
        </h2>
        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.08)' }}></div>
      </div>
      
      <ContactSection />

      <footer style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.2, fontSize: '0.65rem', letterSpacing: '4px', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p>VRAJDESIGN // CORE_SYSTEM_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
    </motion.div>
  );
}