import React from 'react'
import { GrEmoji } from 'react-icons/gr';
import EmojiPicker, {Emoji} from 'emoji-picker-react';

import { useState } from 'react';

const EmojiHandler = ({handleEmoji, handleEmojiClick, emojiOpen}) => {

  return (
    <>
      <button onClick={handleEmoji}>
                <GrEmoji size={"24px"} className="ml-4" />
              </button>

              {emojiOpen && (
                <div className="absolute top-32 right-44">
                  <EmojiPicker onEmojiClick={handleEmojiClick} width={"300px"} height={"350px"} />
                </div>
              )}
    </>
  )
}

export default EmojiHandler