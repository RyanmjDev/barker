import React from 'react';
import {  BsThreeDots } from 'react-icons/bs';
import Divider from './Divider';
import Reaction from './Reaction';
import {timeSince} from '../utils/formatDate'
import { allBarksURL } from '../utils/data';


const Bark = ({barkId, content, user, date, likes}) => {

 const handleClick = (event) => {
  event.preventDefault();
  window.location.href = `/bark/${barkId}`;
 }
  
  return (
    <div className="rounded-lg w-full max-w-2xl mx-auto my-2 " onClick={handleClick}>
      <Divider/>
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
          alt="Profile"
        />

        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <a href="#" className="font-bold hover:underline truncate">
              Night Sky Eikon
            </a>
            <span className="text-gray-500 ml-2">{`@${user}`}</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-gray-500">{timeSince(date)}</span>
            <div className="flex ml-auto">
              <BsThreeDots/>
            </div>
          </div>

          <p className="mt-2 mb-2 text-md">
           {content}
          </p>
        </div>
      </div>

      <Reaction barkId={barkId} likes={likes}/>

      
    </div>
 
  );
};

export default Bark;