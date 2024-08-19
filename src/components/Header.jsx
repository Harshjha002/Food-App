import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onlineStatus = useOnlineStatus();

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-primary-color shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="h-16 object-contain" />
      </div>
      <nav className="nav-items">
        <ul className="flex gap-6 text-text-color-light font-bold text-lg">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/" className="hover:text-accent-color transition duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-accent-color transition duration-300">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-accent-color transition duration-300">Contact Us</Link></li>
          <li><Link to="/grocery" className="hover:text-accent-color transition duration-300">Grocery</Link></li>
          <li><Link to="/cart" className="hover:text-accent-color transition duration-300">Cart</Link></li>
          <button 
            onClick={handleClick} 
            className="bg-secondary-color text-text-color-light py-2 px-4 rounded hover:bg-accent-color transform hover:scale-105 transition duration-300">
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
