import React from 'react';

const Footer = () => {
  return (
    <footer style={{  backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', marginTop: '5rem' }}>
      <div>
        <a href="/privacy-policy" style={{ marginRight: '10px', color: 'black' }}>
          Privacy Policy
        </a>
        <a href="/terms-of-service" style={{ marginRight: '10px', color: 'black' }}>
          Terms of Service
        </a>
        <a href="/return-policy" style={{ marginRight: '10px', color: 'black' }}>
          Return Policy
        </a>
        <a href="/contact-us" style={{ color: 'black' }}>
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
