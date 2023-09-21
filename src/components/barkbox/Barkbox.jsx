import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import EmojiPicker, {Emoji} from 'emoji-picker-react';
import {getURL, allBarksURL, headers } from '../../utils/data';
import '../../App.css'


import Cookies from "js-cookie";
import AtLink from '../common/AtLink';


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
    <div className="rounded-lg w-full max-w-2xl mx-auto my-4 relative">
         
         {replyTo && (
  <div className="flex flex-box ml-16">
    <span>Replying To&nbsp;</span>
    <AtLink username={replyTo} />
  </div>
)}
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
          alt="Profile"
        />
        <div className="flex-grow">
     
          <textarea
            className="w-full h-16 p-2 mb-2 text-lg border-none outline-none resize-none"
            placeholder="What's happening?"
            value={barkText}
            onChange={handleChange}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <label htmlFor="bark-image" className="cursor-pointer">
                <BiImageAdd className="w-6 h-6 text-blue-400 hover:text-blue-600" />
              </label>
              <input
                id="bark-image"
                type="file"
                accept="image/*"
                className="hidden"
              />
              <button onClick={handleEmoji}>
                <GrEmoji size={"24px"} className="ml-4" />
              </button>

              {emojiOpen && (
                <div className="absolute top-32 right-44">
                  <EmojiPicker onEmojiClick={handleEmojiClick} width={"300px"} height={"350px"} />
                </div>
              )}
            </div>
            <button
              className="px-4 py-2 rounded-full bg-blue-400 text-white font-semibold disabled:opacity-50"
              disabled={barkText === ''}
              onClick={handleBark}
            >
              Bark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barkbox;
