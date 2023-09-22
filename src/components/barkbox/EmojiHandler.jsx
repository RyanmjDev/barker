import React from 'react'
import { GrEmoji } from 'react-icons/gr';
import EmojiPicker, {Emoji} from 'emoji-picker-react';

import { useState } from 'react';

const EmojiHandler = () => {
    const [emojiOpen, setEmojiOpen] = useState(false);


    const handleEmojiClick = (event, emojiObject) => {
        console.log(event)
        setBarkText(barkText + event.emoji);
        setEmojiOpen(false);
      };
      
      
        const handleEmoji = () => {
          setEmojiOpen(!emojiOpen);
        };


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