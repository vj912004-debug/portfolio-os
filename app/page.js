'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Home() {
  return (
    <div suppressHydrationWarning style={{ width: '100%', paddingBottom: '50px', overflowX: 'hidden' }}>
      
      {/* --- FLUID HERO SECTION --- */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          padding: '0 8vw', // Increased side breathing room for mobile
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ marginBottom: '15px' }}>
            <span style={{ 
              fontSize: 'clamp(0.55rem, 1.5vw, 0.7rem)', 
              letterSpacing: 'clamp(2px, 1vw, 6px)', // Shrinks spacing on mobile to prevent wrapping
              opacity: 0.4, 
              textTransform: 'uppercase', 
              fontWeight: 'bold',
              display: 'block',
              lineHeight: '1.6'
            }}>
              Architecture.v3 // Initializing_System
            </span>
          </div>

          <h1 className="hero-title" style={{ textTransform: 'uppercase', margin: '5px 0', lineHeight: '1.1' }}>
            <span className="text-gradient" style={{ 
              fontSize: 'clamp(2.2rem, 10vw, 5rem)', // Dropped the minimum size so it fits standard phones
              fontWeight: '900',
              letterSpacing: '-1px'
            }}>
              Vraj Patel
            </span>
          </h1>

          <div style={{ 
            fontSize: 'clamp(1.1rem, 5vw, 2.2rem)', 
            fontWeight: '300', 
            opacity: 0.9, 
            minHeight: '60px', 
            marginTop: '5px' 
          }}>
            <Typewriter
              options={{
                strings: ['MERN Specialist.', 'Next.js Architect.', 'Otago Bound.', 'Digital Craftsman.'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>

          <p style={{ 
            marginTop: '15px', 
            width: '100%',
            maxWidth: '600px', 
            opacity: 0.6, 
            lineHeight: '1.6', 
            fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)' 
          }}>
            Bridging technical logic from Vadodara to New Zealand. Specialized in 
            scalable web architectures, API integrations, and aesthetic digital precision.
          </p>

          <div style={{ 
            marginTop: '35px', 
            display: 'flex', 
            flexWrap: 'wrap', // Forces buttons to stack neatly if the screen is super narrow
            alignItems: 'center', 
            gap: '20px' 
          }}>
            
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <motion.button 
                suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: '12px 24px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid #00f2ff', 
                  color: '#00f2ff', 
                  borderRadius: '30px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold', 
                  letterSpacing: '2px',
                  fontSize: 'clamp(0.65rem, 2vw, 0.8rem)',
                  whiteSpace: 'nowrap'
                }}
              >
                LAUNCH_SYSTEM
              </motion.button>
            </Link>

            <Link href="/about" style={{ 
              fontSize: 'clamp(0.65rem, 2vw, 0.8rem)', 
              opacity: 0.5, 
              color: 'white', 
              letterSpacing: '2px', 
              textDecoration: 'none', 
              borderBottom: '1px solid rgba(255,255,255,0.3)', 
              paddingBottom: '4px',
              whiteSpace: 'nowrap'
            }}>
              LEARN_MORE
            </Link>

          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ 
        textAlign: 'center', 
        opacity: 0.2, 
        fontSize: 'clamp(0.5rem, 1vw, 0.65rem)', 
        letterSpacing: '2px', 
        padding: '30px 20px', 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
      }}>
        <p>VRAJDESIGN // CORE_SYSTEM_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
      
    </div>
  );
}