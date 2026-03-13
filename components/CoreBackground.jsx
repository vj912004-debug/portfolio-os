'use client';
import React from 'react';

const CoreBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: -1, /* Keeps it strictly behind everything */
      backgroundColor: '#03050a', /* Deep dark background */
      
      /* The Blueprint Grid Effect */
      backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
    }}>
      
      {/* Subtle Cyan Glow at the top so it isn't completely flat */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60vw',
        height: '50vh',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        borderRadius: '50%',
      }} />
      
    </div>
  );
};

export default CoreBackground;