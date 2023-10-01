import React from 'react'
import { Link } from 'react-router-dom';

const SidebarNavItem = ({index, isActive, link, icon, text}) => {
  return (
    <li
    className={`my-2 ${
      isActive ? "font-bold" : ""
    }`}
    key={index}
  >
    <Link
      to={link}
      className="flex items-center px-4 py-2 rounded-lg lg:hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out md:justify-start"
    >
      <span className="mr-2 md:hover:text-blue-500">
        {icon}
      </span>
      <span className="hidden text-xl lg:inline">{text}</span>
    </Link>
  </li>
  )
}

export default SidebarNavItem