import React, { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-[#F3CA52] shadow-lg">
      {/* Logo */}
      <div className="logo-container mb-4 md:mb-0">
        <img src={LOGO_URL} alt="logo" className="h-12 md:h-16 object-contain" />
      </div>

      {/* Navigation */}
      <nav className="nav-items">
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white font-semibold text-base md:text-lg">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/" className="hover:text-[#7ABA78] transition duration-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#7ABA78] transition duration-300">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-[#7ABA78] transition duration-300">Contact Us</Link></li>
          <li><Link to="/grocery" className="hover:text-[#7ABA78] transition duration-300">Grocery</Link></li>
          <li><Link to="/cart" className="hover:text-[#7ABA78] transition duration-300">Cart</Link></li>

          {/* Login/Logout Button */}
          <button 
            onClick={handleClick} 
            className="bg-[#0A6847] text-white py-2 px-6 rounded-full hover:bg-[#7ABA78] transform hover:scale-105 transition duration-300">
            {isLoggedIn ? 'Log Out' : 'Log In'}
          </button>
          
          {/* User Greeting */}
          <li className="text-white">
            Welcome, {loggedInUser}!
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
