import React from 'react'
import { BsChat, BsShare } from 'react-icons/bs'
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import {RxBookmark, RxBookmarkFilled} from 'react-icons/rx'


const Reaction = ({size}) => {
  return (
   
    <div className={`flex items-center justify-evenly text-gray-500
     ${size === 'large' ? 'text-xl' : 'text-base'} `}> 
     {/* ^^^ displays component large for HighlightedBark */}

    <div className='flex items-center'>
    <BsChat className="mr-3 text-gray-500 hover:text-blue-500"/>
    <span className="text-gray-500 hover:text-blue-500">27</span> 
  </div>

      <div className='flex items-center'>
       <AiOutlineRetweet className="mr-3 text-gray-500 hover:text-green-500" />
       <span className="mr-6">69</span>
      </div>

      <div className='flex items-center'>
        <AiOutlineHeart className="mr-3 text-gray-500 hover:text-red-500" />
        <span className="mr-6">420</span>
      </div>

      <div className='flex items-center'>
        <RxBookmark className="mr-3 text-gray-500 hover:text-orange-500" />
      </div>

      <div className='flex items center'>
         <BsShare className="mr-3 text-gray-500 hover:text-blue-500" />
      </div>



    </div>
  )
}

export default Reaction