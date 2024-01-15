import React, { useState } from 'react';
import Footer from './footer';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();

//   const handleClick = () => {
        
//   };

  const buttonStyle = {
    backgroundColor: '#00008B',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '23px',
    cursor: 'pointer',
    position: 'absolute',
    width: '200px',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%, -20%)',
  };

  const containerStyle = {
    backgroundImage: 'url(" https://www.paypalobjects.com/marketing/web23/shared/campaigns/gamification-2023/gamification-intro-desktop.jpg")', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'sticky',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
  };

  const overlayImageStyle = {
    width: '20%',
    position: 'absolute',
    top: '25%', 
    left: '40%', 
  };

  
  return (
    <>
     <div  style={containerStyle}>
    
    <h1 style={{ color: '#00008B' , fontSize:'1.7rem' , top:'32px'}}>Answer 5 simple question to earn $xx coupons</h1>

      {/* Overlay Image */}
      <img
        src="https://www.paypalobjects.com/marketing/web23/shared/campaigns/gamification-2023/gamification-paypal-ticket.png" 
        alt="Overlay"
        style={overlayImageStyle}
      />
  <button style={buttonStyle} onClick={() => navigate("/webapp")}>click here</button>
</div> 
<div>
 <Footer/>
</div>
    </>
  );
};

export default Home;
