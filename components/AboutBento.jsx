'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutBento = () => {
  const cards = [
    { title: "LOCATION", content: "Vadodara ➔ Otago, NZ.", icon: "🌏" },
    { title: "ACADEMICS", content: "Graduate Diploma in IT.", icon: "🎓" },
    { title: "EXPERTISE", content: "MERN // Next.js 15 // Three.js.", icon: "💻" },
    { title: "VISION", content: "Technical precision meeting aesthetic soul.", icon: "✨" }
  ];

  return (
    <div style={{
      display: 'grid',
      /* This auto-fit rule ensures the grid is perfectly spaced on any screen size */
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      width: '100%',
      maxWidth: '1100px',
      margin: '0 auto'
    }}>
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          style={{
            padding: '35px 25px',
            borderRadius: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
            background: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '4px', opacity: 0.6, color: '#00f2ff', fontWeight: 'bold' }}>
              {card.title}
            </span>
            <span style={{ fontSize: '1.5rem' }}>{card.icon}</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '300' }}>
            {card.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutBento;