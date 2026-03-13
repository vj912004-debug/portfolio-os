'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- 1. DETECT SCREEN SIZE ---
  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(false); // Close menu if resized to desktop
    };
    
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' },
  ];

  // --- 2. MOBILE HAMBURGER UI ---
  if (isMobile) {
    return (
      <>
        {/* HAMBURGER BUTTON */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed', top: '25px', right: '25px', zIndex: 200,
            width: '45px', height: '45px', borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px', cursor: 'pointer'
          }}
        >
          <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }} style={{ width: '20px', height: '2px', background: '#00f2ff' }} />
          <motion.div animate={{ opacity: isOpen ? 0 : 1 }} style={{ width: '20px', height: '2px', background: '#00f2ff' }} />
          <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }} style={{ width: '20px', height: '2px', background: '#00f2ff' }} />
        </div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, width: '70%',
                background: 'rgba(3, 5, 10, 0.95)', backdropFilter: 'blur(20px)',
                zIndex: 190, display: 'flex', flexDirection: 'column',
                justifyContent: 'center', padding: '40px', gap: '30px',
                borderLeft: '1px solid rgba(0, 242, 255, 0.1)'
              }}
            >
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setIsOpen(false)} style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '4px',
                    color: pathname === link.path ? '#00f2ff' : 'white', opacity: pathname === link.path ? 1 : 0.5
                  }}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // --- 3. DESKTOP NAVBAR UI (Original Pill Design) ---
  return (
    <nav style={{
      position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 100, width: 'max-content'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '40px',
        padding: '10px 30px', display: 'flex', gap: '40px'
      }}>
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path} style={{ textDecoration: 'none' }}>
            <motion.div
              style={{
                fontSize: '0.8rem', fontWeight: '600', letterSpacing: '2px',
                color: pathname === link.path ? '#00f2ff' : 'rgba(255, 255, 255, 0.5)',
                position: 'relative', cursor: 'pointer'
              }}
            >
              {link.name}
              {pathname === link.path && (
                <motion.div layoutId="underline" style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: '#00f2ff' }} />
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;