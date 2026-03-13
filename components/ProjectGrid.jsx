'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const ProjectGrid = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '24px',
      padding: '20px 0',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {projects.map((project, index) => (
        <motion.div 
          key={project.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            ease: [0.215, 0.61, 0.355, 1] 
          }}
          whileHover={{ scale: 1.02, translateY: -5 }}
          className="weather-pill"
          style={{
            gridColumn: project.size === 'large' ? 'span 2' : 'span 1',
            padding: '40px',
            borderRadius: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '280px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Glow Background for Cards */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at top left, rgba(0, 242, 255, 0.05), transparent)',
            zIndex: -1
          }} />

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '700' }} className="text-gradient">
                {project.title}
              </h3>
              <span style={{ fontSize: '0.8rem', opacity: 0.3 }}>0{index + 1}</span>
            </div>
            <p style={{ opacity: 0.6, fontSize: '1rem', lineHeight: '1.6' }}>
              {project.description}
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '25px' }}>
            {project.tech.map((t) => (
              <span key={t} style={{ 
                fontSize: '0.7rem', 
                padding: '5px 12px', 
                background: 'rgba(0, 242, 255, 0.05)',
                border: '1px solid rgba(0, 242, 255, 0.2)', 
                borderRadius: '20px',
                color: 'var(--primary)',
                letterSpacing: '1px'
              }}>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;