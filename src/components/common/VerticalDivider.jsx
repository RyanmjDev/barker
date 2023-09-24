import React from 'react'

const VerticalDivider = () => {
  return (
    <>
      {/* Left vertical border */}
      <div className="hidden md:block absolute top-0 left-4 h-full border-l border-gray-800 "></div>
      {/* Right vertical border */}
      <div className="hidden md:block absolute top-0 right-4 h-full border-r border-gray-800"></div>
    </>
  )
}


export default VerticalDivider