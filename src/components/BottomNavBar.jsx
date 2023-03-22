import { FaHome, FaSearch, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import { TiMessages } from 'react-icons/ti';
import { RiMore2Fill } from 'react-icons/ri';
import {mobileNavLinks} from '../utils/navLinks'

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white border-t flex justify-around md:hidden">
        {mobileNavLinks.map((navLink, index)=> {
          return (
            <a href={navLink.link} className="flex flex-col items-center justify-center w-1/5 text-gray-500 hover:text-blue-500">
               <span className="items-center justify-center">{navLink.icon}</span>
              <span className='text-xs font-medium '>{navLink.text}</span>
            </a>
          );
        })}
    </nav>
  );
}

export default BottomNavbar;
