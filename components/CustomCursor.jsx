'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '30px',
        height: '30px',
        backgroundColor: 'white',
        borderRadius: '50%',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        x: mousePos.x - 15,
        y: mousePos.y - 15,
      }}
    />
  );
};

export default CustomCursor;