import React from 'react'
import { BsThreeDots } from "react-icons/bs";


const Options = ({isReplyMode, handleDeleteClick}) => {
  return (
    <>
          {!isReplyMode && <div className="flex ml-auto">
              <BsThreeDots onClick={handleDeleteClick} />
              
            </div>}
    </>
  )
}

export default Options