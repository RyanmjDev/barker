import React from 'react'

const VerticalDivider = () => {
  return (
    <>
         {/* Left vertical border */}
         <div className="hidden lg:block absolute top-0 left-0 h-full border-l border-gray-300"></div>
        {/* Right vertical border */}
        <div className="hidden lg:block absolute top-0 right-0 h-full border-r border-gray-300"></div>

    </>
  )
}

export default VerticalDivider