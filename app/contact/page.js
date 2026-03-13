'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('INITIATE_CONTACT');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('SENDING...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('TRANSMISSION_SUCCESSFUL');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("API Error:", data.error);
        setStatus('SYSTEM_ERROR_RETRY');
      }
    } catch (err) {
      console.error("Connection Error:", err);
      setStatus('CONNECTION_LOST');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '120px 20px 60px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      overflowX: 'hidden' 
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ width: '100%', maxWidth: '500px' }}
      >
        <h1 style={{ 
          fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
          color: '#00f2ff', 
          letterSpacing: '5px', 
          textAlign: 'center',
          marginBottom: '40px' 
        }}>
          {status}
        </h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input
            type="text"
            placeholder="NAME"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="EMAIL_ADDRESS"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={inputStyle}
          />
          <textarea
            placeholder="MESSAGE_CONTENT"
            required
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            style={{ ...inputStyle, borderRadius: '15px', resize: 'none' }}
          />
          
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0, 242, 255, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              padding: '15px',
              background: 'transparent',
              border: '1px solid #00f2ff',
              color: '#00f2ff',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              letterSpacing: '3px',
              marginTop: '10px',
              fontSize: '0.8rem'
            }}
          >
            SEND_TRANSMISSION
          </motion.button>
        </form>

        <div style={{ marginTop: '60px', textAlign: 'center', opacity: 0.6 }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '2px', color: '#00f2ff' }}>CURRENT_STATUS</p>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Available for Opportunities</p>
        </div>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  padding: '15px 20px',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '30px',
  color: 'white',
  outline: 'none',
  fontSize: '0.9rem',
  letterSpacing: '1px',
  transition: 'border 0.3s ease',
};