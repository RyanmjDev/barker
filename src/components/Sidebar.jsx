import React, { useEffect, useState, useContext } from "react";
import { generateNavLinks } from "../utils/navLinks";
import { TbDog } from "react-icons/tb";

import { BsThreeDots } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

import axios from "axios";

import { Link, useLocation } from 'react-router-dom';

import UserContext from "../context/UserContext";
import BarkboxModal from "./BarkboxModal";




const Sidebar = ({onBarkButtonClick}) => {

const userData = useContext(UserContext);
const navLinks = generateNavLinks(userData);
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
      <button
        className="bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 px-2 py-1 absolute top-4 right-4 rounded-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Hide" : "Show"}
      </button>
      {isSidebarOpen && (
        <div
          className={`w-16 lg:w-60 min-h-screen fixed top-0 
            left-0 xl:left-80 lg:ml-56 xl:ml-28 overflow-y-auto transition-all duration-300
            ${
              isSidebarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
                  >
          <div className="flex items-center justify-left ml-4 h-16">
            <TbDog className="text-blue-400 text-3xl" />
          </div>

          <ul className="mt-4">
        {navLinks.map((navLink, index) => {
          const isActive = location.pathname === navLink.link;
          return (
            <li
              className={`my-2 ${
                isActive ? "font-bold" : ""
              }`}
              key={index}
            >
              <Link
                to={navLink.link}
                className="flex items-center px-4 py-2 rounded-lg lg:hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out md:justify-start"
              >
                <span className="mr-2 md:hover:text-blue-500">
                  {navLink.icon}
                </span>
                <span className="hidden text-xl lg:inline">{navLink.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>

          <div className="flex ml-2">
            <button className="w-2/3 font-bold flex items-center justify-center border-b bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 mt-8 rounded-full"
            onClick={onBarkButtonClick}>
              <FaPen className="block lg:hidden" />{" "}
              <span className="hidden lg:block">Bark</span>
            </button>
          </div>

          <div className="flex flex-start items-center fixed bottom-0 left-0 mb-4 ml-2 hover:bg-gray-300 rounded-full">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
              alt="Profile"
            />
            <div className="hidden lg:block">
              <span className="font-bold">Night Sky Eikon</span>
              <br />
              <span className="text-gray-500">{userData}</span>
            </div>

            <BsThreeDots className="hidden ml-4 lg:block" />
          </div>
        </div>
      )}


    </>
  );
};

export default Sidebar;
