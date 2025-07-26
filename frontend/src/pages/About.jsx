// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/LandingNav';
import LandingNavbar from '../components/LandingNav';


const About = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(195deg, #000000, #000000)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    
      <div style={{
        background: 'rgba(40,40,50,0.85)',
        borderRadius: '16px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(4px)',
        padding: '40px 60px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          color: '#fff',
          textShadow: '0 4px 20px #232526, 0 2px 4px #414345'
        }}>
          COMING SOON
        </h1>
        <p style={{
          color: '#b0c4de',
          fontSize: '1.2rem',
          marginTop: '20px',
          fontWeight: '500'
        }}>
          We're working hard to bring you this page.<br />
          Our team is building something amazing-stay tuned for updates!
        </p>
        <p style={{
          color: '#a0a0a0',
          fontSize: '1rem',
          marginTop: '10px'
        }}>
          The About page is under development as we finalize our story and mission details.<br />
          Thank you for your patience and interest!
        </p>
      </div>
    </div>
  );
};

export default About;
