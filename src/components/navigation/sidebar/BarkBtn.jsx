import React from 'react'
import { FaPen } from "react-icons/fa";

const BarkBtn = ({openBarkboxModal}) => {
  return (
    <div className="flex ml-2">
    <button className="w-2/3 font-bold flex items-center justify-center border-b bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 mt-8 rounded-full"
    onClick={() => openBarkboxModal()}>
      <FaPen className="block lg:hidden" />{" "}
      <span className="hidden lg:block">Bark</span>
    </button>
  </div>
  )
}

export default BarkBtn