'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Home() {
  return (
    <div suppressHydrationWarning style={{ width: '100%', paddingBottom: '50px' }}>
      
      {/* --- FLUID HERO SECTION --- */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          // FLUID PADDING: 5% on mobile, up to 10% on large laptops
          padding: '0 clamp(5%, 8vw, 10%)' 
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ marginBottom: '20px' }}>
            <span style={{ 
              // FLUID FONT: Scales down smoothly on small screens
              fontSize: 'clamp(0.5rem, 1.5vw, 0.7rem)', 
              letterSpacing: '4px', 
              opacity: 0.4, 
              textTransform: 'uppercase', 
              fontWeight: 'bold' 
            }}>
              Architecture.v3 // Initializing_System
            </span>
          </div>

          <h1 className="hero-title" style={{ textTransform: 'uppercase', margin: '10px 0' }}>
            {/* You can also define fluid sizes in your globals.css for .hero-title if it's too big! */}
            <span className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>Vraj Patel</span>
          </h1>

          <div style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 2.2rem)', 
            fontWeight: '300', 
            opacity: 0.9, 
            minHeight: '60px', 
            marginTop: '10px' 
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
            marginTop: '20px', 
            width: '100%',
            maxWidth: '600px', 
            opacity: 0.6, 
            lineHeight: '1.6', 
            // FLUID PARAGRAPH: highly readable on mobile and desktop
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' 
          }}>
            Bridging technical logic from Vadodara to New Zealand. Specialized in 
            scalable web architectures, API integrations, and aesthetic digital precision.
          </p>

          {/* FLUID BUTTON CONTAINER: flexWrap allows buttons to stack on tiny mobile screens if needed */}
          <div style={{ 
            marginTop: '40px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center', 
            gap: '20px' 
          }}>
            
            <Link href="/projects" style={{ textDecoration: 'none' }}>
              <motion.button 
                suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  padding: 'clamp(10px, 2vw, 15px) clamp(20px, 4vw, 35px)', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid #00f2ff', 
                  color: '#00f2ff', 
                  borderRadius: '30px', 
                  cursor: 'pointer', 
                  fontWeight: 'bold', 
                  letterSpacing: '2px',
                  fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)'
                }}
              >
                LAUNCH_SYSTEM
              </motion.button>
            </Link>

            <Link href="/about" style={{ 
              fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', 
              opacity: 0.5, 
              color: 'white', 
              letterSpacing: '2px', 
              textDecoration: 'none', 
              borderBottom: '1px solid rgba(255,255,255,0.3)', 
              paddingBottom: '4px' 
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
        letterSpacing: '3px', 
        padding: '30px 0', 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
        margin: '0 clamp(5%, 10vw, 10%)' 
      }}>
        <p>VRAJDESIGN // CORE_SYSTEM_2026 // ALL_RIGHTS_RESERVED</p>
      </footer>
      
    </div>
  );
}