import React, { useState, useEffect, useRef, useContext } from 'react';
import { BsChat, BsShare } from 'react-icons/bs';
import { AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { RxBookmark } from 'react-icons/rx';
import { RiLinksFill } from 'react-icons/ri'
import { api, allBarksURL } from '../../utils/data';
import copy from 'clipboard-copy';

import Cookies from 'js-cookie';
import axios from 'axios';

import BarkboxModalContext from "../../context/BarkboxModalContext";


const Reaction = ({ barkId, content, size, likes, displayName,  user, createdAt, isLikedByUser, replies }) => {

  const [userLiked, setUserLiked] = useState(isLikedByUser);
  const [postLikes, setPostLikes] = useState(likes);

  const { openBarkboxModal } = useContext(BarkboxModalContext);

  const heartRef = useRef(null);

  useEffect(() => {
    setUserLiked(isLikedByUser);
  }, [isLikedByUser]);
  
  const handleLike = async (event) => {
    event.stopPropagation();
    try {
      await api.post(`${allBarksURL}${barkId}/like`, {});
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

  const handleReply = (event) => {
    event.stopPropagation();
    openBarkboxModal({barkId: barkId, content: content, displayName: displayName, user: user, createdAt: createdAt})
  }

  const handleCopyLink = (event) => {
    event.stopPropagation();
    const url = `${window.location.origin}/bark/${barkId}`;
    copy(url).then(() => {
      // replace this later...
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div
      className={`flex items-center justify-evenly text-gray-500 ${
        size === 'large' ? 'text-xl' : 'text-base'
      }`}
    >
      <div className='flex items-center'>
        <BsChat className='mr-3 text-gray-500 hover:text-blue-500' onClick={handleReply}/>
        <span className='text-gray-500 hover:text-blue-500'>{replies}</span>
      </div>

      <div className='flex items-center'>
        <AiOutlineRetweet className='mr-3 text-gray-500 hover:text-green-500' />
        <span className='mr-6'>69</span>
      </div>

      <div className='flex items-center'>  
       <span ref={heartRef} onClick={handleLike}>
        {userLiked ? (
         <span ref={heartRef} onClick={handleLike}>
          <AiFillHeart
            className='mr-3 text-red-500'
          />
          </span>
        ) : (
          <span ref={heartRef} onClick={handleLike}>
          <AiOutlineHeart
            className='mr-3 text-gray-500 hover:text-red-500'
          />
          </span>
        )}
        </span>
        <span className='mr-6'>{!size && postLikes}</span>
      </div>

      <div className='flex items-center'>
        <RxBookmark className='mr-3 text-gray-500 hover:text-orange-500' />
      </div>

      <div className='flex items-center'>
        <RiLinksFill className='mr-3 text-gray-500 hover:text-blue-500' onClick={handleCopyLink} />
      </div>
    </div>
  );
};

export default Reaction;
