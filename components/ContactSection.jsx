'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  // 1. State to hold the form data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // 2. State to handle the button text and loading status
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  // 3. The function that runs when they click "SEND"
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
        
        // Reset the button after 3 seconds
        setTimeout(() => setStatus('idle'), 3000); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Transmission failed", error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px', maxWidth: '1100px', margin: '0 auto', width: '100%'
    }}>
      
      {/* --- THE FORM --- */}
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{
          display: 'flex', flexDirection: 'column', gap: '20px',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
          padding: '40px', borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#00f2ff', letterSpacing: '2px' }}>
          INITIATE_CONTACT
        </h3>
        
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name // Organization" 
          style={{
            padding: '15px 20px', background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px',
            color: 'white', outline: 'none', fontFamily: 'inherit'
          }}
        />
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address" 
          style={{
            padding: '15px 20px', background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px',
            color: 'white', outline: 'none', fontFamily: 'inherit'
          }}
        />
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Transmission Message..." 
          rows="4"
          style={{
            padding: '15px 20px', background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px',
            color: 'white', outline: 'none', fontFamily: 'inherit', resize: 'none'
          }}
        />
        
        <button 
          type="submit"
          disabled={status === 'loading'}
          style={{
            padding: '15px', background: status === 'success' ? 'rgba(0, 242, 255, 0.2)' : 'transparent',
            border: '1px solid #00f2ff', color: '#00f2ff',
            borderRadius: '12px', cursor: status === 'loading' ? 'wait' : 'pointer',
            fontWeight: 'bold', letterSpacing: '2px', marginTop: '10px',
            transition: '0.3s'
          }}
        >
          {status === 'idle' && 'SEND_TRANSMISSION'}
          {status === 'loading' && 'TRANSMITTING...'}
          {status === 'success' && 'TRANSMISSION_SUCCESS'}
          {status === 'error' && 'SYSTEM_ERROR_RETRY'}
        </button>
      </motion.form>

      {/* --- DIRECT LINKS --- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px', padding: '20px' }}
      >
        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '4px', opacity: 0.5, marginBottom: '10px' }}>CURRENT_STATUS</p>
          <p style={{ fontSize: '1.2rem', color: '#00f2ff' }}>Available for Opportunities</p>
          <p style={{ opacity: 0.7, marginTop: '5px', fontSize: '0.9rem' }}>Otago Region, New Zealand // 2026</p>
        </div>

        <div>
          <p style={{ fontSize: '0.7rem', letterSpacing: '4px', opacity: 0.5, marginBottom: '15px' }}>NETWORK_LINKS</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>GitHub</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>LinkedIn</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '3px' }}>Twitter/X</a>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default ContactSection;