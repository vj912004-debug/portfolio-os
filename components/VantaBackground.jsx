'use client';
import React, { useState, useEffect, useRef } from 'react';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    const initVanta = async () => {
      // Switched from HALO to NET for a cleaner, readable tech vibe
      const NET = (await import('vanta/dist/vanta.net.min')).default;
      
      if (!vantaEffect && window.THREE) {
        setVantaEffect(
          NET({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00f2ff,       // Your signature Cyan for the dots/lines
            backgroundColor: 0x03050a, // Deep dark background for text readability
            points: 10.00,         // Lowered point density to keep it clean
            maxDistance: 22.00,    // Connects points smoothly
            spacing: 20.00,        // Spreads the network out
            showDots: true         // True OS tech feel
          })
        );
      }
    };

    if (typeof window !== 'undefined') {
      if (window.THREE) {
        initVanta();
      } else {
        const timer = setInterval(() => {
          if (window.THREE) {
            initVanta();
            clearInterval(timer);
          }
        }, 100);
        return () => clearInterval(timer);
      }
    }
    return () => vantaEffect?.destroy();
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0,
        opacity: 0.8 // Drops the brightness of the whole canvas just a bit more
      }} 
    />
  );
};

export default VantaBackground;