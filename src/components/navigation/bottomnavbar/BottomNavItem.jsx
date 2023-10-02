import React from 'react'
import { Link } from 'react-router-dom';

const BottomNavItem = ({isActive, id, link, icon, text}) => {
  return (
    <Link
    to={link}
    className={`flex flex-col items-center justify-center w-1/5 hover:text-blue-500 ${
      isActive ? 'font-semibold text-blue-500' : ''
    }`}
    key={id}
  >
    {isActive && <div className="w-1/5 h-1 bg-blue-500 absolute top-0"></div>}
    <span className="items-center justify-center ml-3">{icon}</span>
    <span className="text-xs font-medium">{text}</span>
  </Link>
  )
}

export default BottomNavItem