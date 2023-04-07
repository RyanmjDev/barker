import React, { useState, useEffect, useRef } from 'react';
import { BsChat, BsShare } from 'react-icons/bs';
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { RxBookmark } from 'react-icons/rx';
import { allBarksURL } from '../utils/data';

import Cookies from 'js-cookie';
import axios from 'axios';

const Reaction = ({ barkId, size, likes, isLikedByUser, replies }) => {
  const [userLiked, setUserLiked] = useState(isLikedByUser);
  const [postLikes, setPostLikes] = useState(likes);

  const heartRef = useRef(null);

  useEffect(() => {
    setUserLiked(isLikedByUser);
  }, [isLikedByUser]);
  
  const handleLike = async (event) => {
    event.stopPropagation();
    const token = Cookies.get('token');
    const headers = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      await axios.post(`${allBarksURL}/${barkId}/like`, {}, headers);
      console.log('liked the bark!');
      setUserLiked(!userLiked);
      userLiked ? setPostLikes(postLikes - 1) : setPostLikes(postLikes + 1);
      heartRef.current.classList.add('like-animation');
      heartRef.current.addEventListener('animationend', () => {
        heartRef.current.classList.remove('like-animation');
      });
    } catch (error) {
      console.error('Error like bark:', error);
    }
  };

  console.log(isLikedByUser)

  return (
    <div
      className={`flex items-center justify-evenly text-gray-500 ${
        size === 'large' ? 'text-xl' : 'text-base'
      }`}
    >
      <div className='flex items-center'>
        <BsChat className='mr-3 text-gray-500 hover:text-blue-500' />
        <span className='text-gray-500 hover:text-blue-500'>{replies}</span>
      </div>

      <div className='flex items-center'>
        <AiOutlineRetweet className='mr-3 text-gray-500 hover:text-green-500' />
        <span className='mr-6'>69</span>
      </div>

      <div className='flex items-center'>  
       <span ref={heartRef} onClick={handleLike}>
        {userLiked ? (
          <AiFillHeart
            ref={heartRef}
            className='mr-3 text-red-500'
            onClick={handleLike}
          />
        ) : (
          <AiOutlineHeart
            ref={heartRef}
            className='mr-3 text-gray-500 hover:text-red-500'
            onClick={handleLike}
          />
        )}
        </span>
        <span className='mr-6'>{!size && postLikes}</span>
      </div>

      <div className='flex items-center'>
        <RxBookmark className='mr-3 text-gray-500 hover:text-orange-500' />
      </div>

      <div className='flex items-center'>
        <BsShare className='mr-3 text-gray-500 hover:text-blue-500' />
      </div>
    </div>
  );
};

export default Reaction;
