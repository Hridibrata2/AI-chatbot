import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const Landing = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/ai');
  };

  return (
    <div>
      <h2 className='title'>Andromeda</h2>
      <ul className='nav'>
        <li>features</li>
        <li>pricing</li>
        <li>support</li>
      </ul>

      <div className='image_container'>
        <img src="3d_render.jpg" alt="space" className='space' />
        <button className='image-btn' onClick={handleClick}>Get Started</button>
      </div>

      <div className='text_container'>
        <h1 className='heading'>Your AI Companion for Effortless Conversations</h1>
        <p className='subheading'>
          Our advanced AI chatbot makes every interaction feel natural, helpful, and effortless.
          Whether you're asking a quick question, solving a problem, or just having a chat — it’s designed to understand you instantly.
          No jargon. No confusion. Just smooth, intuitive communication that adapts to your needs.
          It’s like talking to someone who gets you — fast, friendly, and always ready to help.
        </p>

        <div className='card_container'>
          <Card 
            icon="🪄" 
            header="Intelligent Response Generation" 
            text="Leverage advanced AI algorithms to generate contextually relevant and engaging responses, enhancing user interactions." 
          />
          <Card 
            icon="🌐" 
            header="Cross-Platform Compatibility" 
            text="Access and manage your AI responses from any device, ensuring a consistent experience across web and mobile platforms." 
          />
          <Card 
            icon="🛡️" 
            header="Secure and Reliable" 
            text="Benefit from robust security measures and reliable performance, ensuring your data and interactions are protected." 
          />
        </div>
      </div>

      <ul className='nav2'>
        <li className='active'>features</li>
        <li className='active2'>pricing</li>
        <li className='active3'>support</li>
        <li className='active4'>Terms of Services</li>
        <li className='active5'>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Landing;