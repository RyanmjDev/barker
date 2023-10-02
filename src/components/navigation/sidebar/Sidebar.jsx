import React, { useEffect, useState, useContext } from "react";
import { generateNavLinks } from "../../../utils/navLinks";

import axios from "axios";

import { useLocation } from 'react-router-dom';
import BarkboxModal from "../../bark/BarkboxModal";
import BarkBtn from "./BarkBtn";
import UserProfile from "./UserProfile";
import BarkerLogo from "./BarkerLogo";
import SidebarNavItem from "./SidebarNavItem";



const Sidebar = ({userData, openBarkboxModal, unreadCount}) => {


const navLinks = generateNavLinks(userData.username, unreadCount);
const location = useLocation();

const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768); 

  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


       

  return (
    <>

      {isSidebarOpen && (
        <div
          className={`w-16 lg:w-60 min-h-screen fixed top-0 
            left-0 xl:left-80 lg:ml-56 xl:ml-28 overflow-y-auto transition-all duration-300
            ${
              isSidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
                  >

          <BarkerLogo/>

          <ul className="mt-4">
        {navLinks.map((navLink, index) => {
          const isActive = location.pathname === navLink.link;
          return (
              <SidebarNavItem index={index} isActive={isActive} link={navLink.link} icon={navLink.icon} text={navLink.text}/>
          );
        })}
      </ul>

        <BarkBtn openBarkboxModal={openBarkboxModal}/>
        <UserProfile displayName={userData.displayName} username={userData.username}/>
         
        </div>
      )}


    </>
  );
};

export default Sidebar;
