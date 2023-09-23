import React from 'react'
import { BiImageAdd } from 'react-icons/bi';
import EmojiHandler from './EmojiHandler';

const UtilityBar = ({handleEmoji, handleEmojiClick, emojiOpen}) => {
  return (
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

    <EmojiHandler handleEmoji={handleEmoji} handleEmojiClick={handleEmojiClick} emojiOpen={emojiOpen}/>

  </div>
  )
}

export default UtilityBar