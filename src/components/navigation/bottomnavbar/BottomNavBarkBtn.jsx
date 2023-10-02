import React from 'react'
import { FaPen } from 'react-icons/fa';

const BottomNavBarkBtn = ({openBarkboxModal}) => {
  return (
    <button
    className="fixed z-1000 rounded-full h-12 w-12 pl-4 bg-blue-400 bottom-24 right-4"
    onClick={(event) => { 
        event.stopPropagation();
        openBarkboxModal()}}
  >
    <FaPen />
  </button>
  )
}

export default BottomNavBarkBtn