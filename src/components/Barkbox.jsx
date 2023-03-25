import React from 'react';
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import EmojiPicker, {Emoji} from 'emoji-picker-react';

import '../App.css'

const Barkbox = () => {
  const [barkText, setBarkText] = useState('');
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleChange = (event) => {
    setBarkText(event.target.value);
    event.target.style.height = '64px';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  const handleBark = () => {
    // TODO: handle Bark submission
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
    <div className="p-2 rounded-lg w-full max-w-2xl mx-auto my-4 relative">
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
