import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Lukács Pálinka</h1>
      <p>1969</p>
    </div>
  );
}

export default HeroSection;
