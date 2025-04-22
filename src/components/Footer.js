import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Skill Nest. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:localskillnest@gmail.com">Email</a>
        <a href="https://www.instagram.com/localskillnest?utm_source=qr&igsh=MWNsNW9ncHI1N2Z6Zw==" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.youtube.com/channel/UC9nNTvh497QOPaMs6R60kJg" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;