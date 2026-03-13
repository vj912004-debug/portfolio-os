'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '@/components/ProjectGrid';

export default function ProjectsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
      style={{ padding: '150px 10% 100px 10%', minHeight: '100vh' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '0.75rem', letterSpacing: '6px', opacity: 0.3, fontWeight: 'bold', textTransform: 'uppercase' }}>
          Selected_Works
        </h2>
        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.08)' }}></div>
      </div>
      <ProjectGrid />
    </motion.div>
  );
}