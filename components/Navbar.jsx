'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', top: '30px', right: '5%', zIndex: 100,
      display: 'flex', gap: '25px',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      padding: '12px 30px', borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      alignItems: 'center'
    }}>
      {['Home', 'About', 'Projects', 'Contact'].map((item) => (
        <Link 
          key={item} 
          href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
          style={{
            color: 'white', textDecoration: 'none', fontSize: '0.75rem',
            fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase',
            opacity: 0.7, transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => { e.target.style.opacity = 1; e.target.style.color = '#00f2ff'; }}
          onMouseLeave={(e) => { e.target.style.opacity = 0.7; e.target.style.color = 'white'; }}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;