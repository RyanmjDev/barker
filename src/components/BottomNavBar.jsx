import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaPen } from 'react-icons/fa';
import { generateBottomNavLinks } from '../utils/navLinks';
import { Link, useLocation } from 'react-router-dom';

const BottomNavbar = ({ userData, openBarkboxModal, unreadCount }) => {
  const bottomNavLinks = generateBottomNavLinks(userData, unreadCount);
  const location = useLocation();

  return (
    <>
      <nav className="fixed bottom-0 left-0 w-full h-16  border-t flex justify-around 
      border-gray-700  darkModeBackground 
      md:hidden">
        <button
          className="fixed rounded-full h-12 w-12 pl-4 bg-blue-400 bottom-24 right-4"
          onClick={() => openBarkboxModal()}
        >
          <FaPen />
        </button>
        {bottomNavLinks.map((navLink, index) => {
          const isActive = location.pathname === navLink.link;
          return (
            <Link
              to={navLink.link}
              className={`flex flex-col items-center justify-center w-1/5 hover:text-blue-500 ${
                isActive ? 'font-semibold text-blue-500' : ''
              }`}
              key={navLink.id}
            >
              <span className="items-center justify-center ml-3">{navLink.icon}</span>
              <span className="text-xs font-medium">{navLink.text}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default BottomNavbar;
