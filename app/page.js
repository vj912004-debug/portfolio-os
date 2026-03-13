'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Link from 'next/link'; // <-- Added this for multi-page routing

export default function Home() {
  return (
    <div suppressHydrationWarning style={{ width: '100%', paddingBottom: '50px' }}>
      
      {/* --- HERO SECTION --- */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '0 10%' 
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '6px', opacity: 0.4, textTransform: 'uppercase', fontWeight: 'bold' }}>
              Architecture.v3 // Initializing_System
            </span>
          </div>

          <h1 className="hero-title" style={{ textTransform: 'uppercase', margin: '10px 0' }}>
            <span className="text-gradient">Vraj Patel</span>
          </h1>

          <div style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)', fontWeight: '300', opacity: 0.9, minHeight: '60px', marginTop: '10px' }}>
            <Typewriter
              options={{
                strings: ['MERN Specialist.', 'Next.js Architect.', 'Otago Bound.', 'Digital Craftsman.'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p style={{ marginTop: '30px', maxWidth: '600px', opacity: 0.6, lineHeight: '1.8', fontSize: '1.1rem' }}>
            Bridging technical logic from Vadodara to New Zealand. Specialized in 
            scalable web architectures, API integrations, and aesthetic digital precision.
          </p>

          <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', gap: '30px' }}>
            
            {/* FIXED: Changed from <a href="#projects"> to <Link href="/projects"> */}
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <motion.button 
                suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '15px 35px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid #00f2ff', 
                  color: '#00f2ff', 
                  borderRadius: '30px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold', 
                  letterSpacing: '2px',
                  fontSize: '0.8rem'
                }}
              >
                LAUNCH_SYSTEM
              </motion.button>
            </Link>

            {/* FIXED: Changed from <a href="#about"> to <Link href="/about"> */}
            <Link href="/about" style={{ fontSize: '0.8rem', opacity: 0.5, color: 'white', letterSpacing: '2px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '4px' }}>
              LEARN_MORE
            </Link>

          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ textAlign: 'center', opacity: 0.2, fontSize: '0.65rem', letterSpacing: '4px', padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', margin: '0 10%' }}>
        <p>VRAJDESIGN // CORE_SYSTEM_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
      
    </div>
  );
}