import React from 'react'
import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';

const Barkbox = () => {
    const [barkText, setBarkText] = useState('');

    const handleChange = (event) => {
      setBarkText(event.target.value);
    };
  
    const handleBark = () => {
      // TODO: handle Bark submission
    };
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-2xl mx-auto my-4 ">
        <div className="flex items-start">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
            alt="Profile"
          />
          <div className="flex-grow">
            <textarea
              className="w-full h-24 p-2 mb-2 text-lg text-gray-700 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
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
  }
export default Barkbox