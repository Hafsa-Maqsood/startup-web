import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import './Startup.css'; // Styling file

const Startup = () => {
  const navigate = (screen) => {
    alert(`Navigate to: ${screen}`); // Dummy navigation
  };

  return (
    <div className="scrollContainer">
      <div className="container">
        <div className="logoContainer">
          <img src="/logo.png" className="logo" alt="Logo" />
         
        </div>
<div className="logoContainer">

          <img src="/StartupSofa.jpg" className="chair" alt="Chair" />
        </div>

        <button className="buttonAccount" onClick={() => navigate('Login')}>
          Create Account <FaArrowCircleRight size={20} />
        </button>

        <button className="buttonStarted" onClick={() => navigate('Home')}>
          Started <FaArrowCircleRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Startup;
