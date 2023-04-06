
import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiMore2Fill } from 'react-icons/ri';
import { generateBottomNavLinks } from '../utils/navLinks';

import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from "../context/UserContext";



const BottomNavbar = () => {
  const userData = useContext(UserContext)
  const bottomNavLinks = generateBottomNavLinks(userData);
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t flex justify-around md:hidden">
      {bottomNavLinks.map((navLink, index) => {
        const isActive = location.pathname === navLink.link;
        return (
          <Link
            to={navLink.link}
            className={`flex flex-col items-center justify-center w-1/5 text-gray-500 hover:text-blue-500 ${
              isActive ? "font-semibold text-blue-500" : ""
            }`}
            key={navLink.id}
          >
            <span className="items-center justify-center ml-3">
              {navLink.icon}
            </span>
            <span className="text-xs font-medium">{navLink.text}</span>
          </Link>
        );
      })}
    </nav>
  );
};


export default BottomNavbar;
