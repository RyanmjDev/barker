import React, { useState } from 'react'
import { BsChat, BsShare } from 'react-icons/bs'
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import {RxBookmark, RxBookmarkFilled} from 'react-icons/rx'
import { allBarksURL } from '../utils/data'

import Cookies from "js-cookie";
import axios from 'axios';


const Reaction = ({barkId, size, likes, isLikedByUser, replies}) => {
  const [userLiked, setUserLiked] = useState(isLikedByUser);

  const handleLike = async (event) => {
    event.stopPropagation();
    const token = Cookies.get("token"); // Gets token for login
    const headers = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  
    try {
      await axios
        .post(`${allBarksURL}/${barkId}/like`, {}, headers)
        .then((response) => {
          console.log("liked the bark!");
          setUserLiked(!userLiked);
          event.target.classList.add('like-animation'); // Add CSS class to heart icon
          event.target.addEventListener('animationend', () => {
            event.target.classList.remove('like-animation'); // Remove CSS class after animation is finished
          });
        });
    } catch (error) {
      console.error('Error like bark:', error);
    }
  };
  


  return (
   
    <div className={`flex items-center justify-evenly text-gray-500
     ${size === 'large' ? 'text-xl' : 'text-base'} `}> 
     {/* ^^^ displays component large for HighlightedBark */}

    <div className='flex items-center'>
    <BsChat className="mr-3 text-gray-500 hover:text-blue-500"/>
    <span className="text-gray-500 hover:text-blue-500">{replies}</span> 
  </div>

      <div className='flex items-center'>
       <AiOutlineRetweet className="mr-3 text-gray-500 hover:text-green-500" />
       <span className="mr-6">69</span>
      </div>

      <div className='flex items-center' onClick={handleLike}>
        {userLiked ? <AiFillHeart className='className="mr-3 text-red-500'/>
        : <AiOutlineHeart className="mr-3 text-gray-500 hover:text-red-500" />
        }
        <span className="mr-6">{likes}</span>
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