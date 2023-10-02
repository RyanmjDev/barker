import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser, FaPen } from 'react-icons/fa';
import { generateBottomNavLinks } from '../../../utils/navLinks';
import { Link, useLocation } from 'react-router-dom';
import BottomNavItem from './BottomNavItem';
import BottomNavBarkBtn from './BottomNavBarkBtn';


const BottomNavbar = ({ userData, openBarkboxModal, unreadCount }) => {
  const bottomNavLinks = generateBottomNavLinks(userData, unreadCount);
  const location = useLocation();

  return (
    <>
<nav className="fixed bottom-0 left-0 w-full h-16 border-t flex justify-around 
border-gray-700 darkModeBackground md:hidden" style={{ zIndex: 1000 }}>

        <BottomNavBarkBtn openBarkboxModal={openBarkboxModal}/>

        {bottomNavLinks.map((navLink, index) => {
          const isActive = location.pathname === navLink.link;
          return (
            <BottomNavItem isActive={isActive} key={navLink.id} link={navLink.link}
              icon={navLink.icon} text={navLink.text}/>
          );
        })}
      </nav>
    </>
  );
};

export default BottomNavbar;
