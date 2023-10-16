import React from 'react';
import { useState } from 'react';

import ProfilePic from '../profile/ProfilePic';
import ReplyTo from './ReplyTo';
import UtilityBar from './UtilityBar';
import SubmitButton from './SubmitButton';
import submitBark from '../../api/submitBark';

import '../../App.css'
import Divider from '../common/Divider';

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
    try {
      const responseData = await submitBark(barkText, replyTo, replyId);
      console.log(responseData);
      setBarkText('');
      if (closeModal) {
        closeModal();
      }
      if (onNewBark) {
        onNewBark(responseData);
      }
    } catch (error) {
      // Note: implement a system to show the user the error
      console.log(error);
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
      <Divider/>
    </div>
  );
};

export default Barkbox;
