import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { GrEmoji } from 'react-icons/gr';
import EmojiPicker, {Emoji} from 'emoji-picker-react';
import {getURL, allBarksURL, headers } from '../../utils/data';
import ProfilePic from '../profile/ProfilePic';
import '../../App.css'

import Cookies from "js-cookie";

import ReplyTo from './ReplyTo';
import UtilityBar from './UtilityBar';
import SubmitButton from './SubmitButton';


const Barkbox = ({replyTo, replyId, closeModal, onNewBark}) => {
  const [barkText, setBarkText] = useState('');
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleChange = (event) => {
    setBarkText(event.target.value);
    event.target.style.height = '64px';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  const handleBark = async (event) => {
    event.preventDefault();

  const token = Cookies.get("token"); // Gets token for login
  const headers = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  
    try{
      
      // If we're replying, use the Reply route. Otherwise, we're just posting a normal bark
      const url = replyTo ?  `${getURL(allBarksURL)}${replyId}` : getURL(allBarksURL);
    
      await axios
    .post(url,
    {
      content: barkText 
    },
    headers)
    .then(response => {
      // Empty the Text Box
      console.log(response.data)
      setBarkText('');
        if(closeModal)
        {
          closeModal(); // Can Generate Errors
        }

        if (onNewBark) {
          onNewBark(response.data);
        }
    })
    
  } catch (error) {
    console.error('Error creating bark:', error);
  }
     
  };

 const handleEmojiClick = (event, emojiObject) => {
  console.log(event)
  setBarkText(barkText + event.emoji);
  setEmojiOpen(false);
};


  const handleEmoji = () => {
    setEmojiOpen(!emojiOpen);
  };

  return (
    <div className="rounded-lg w-full max-w-2xl mx-auto my-4 px-4 relative">
         
         {replyTo &&  <ReplyTo replyTo={replyTo}/> }

      <div className="flex items-start">
      <ProfilePic size="medium"/>
        <div className="flex-grow">
     
          <textarea
            className="w-full h-16 p-2 mb-2 text-lg border-none outline-none resize-none"
            placeholder="What's happening?"
            value={barkText}
            onChange={handleChange}
          />

          <div className="flex justify-between items-center">
              <UtilityBar handleEmoji={handleEmoji} handleEmojiClick={handleEmojiClick} emojiOpen={emojiOpen}/>
              <SubmitButton barkText={barkText} handleBark={handleBark}/>           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Barkbox;
