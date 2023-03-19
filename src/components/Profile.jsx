import React from 'react'
import {IoArrowBack} from 'react-icons/io5';
import Bark from './Bark';
import Barklist from './Barklist';

import '../App.css'

const Profile = () => {
  return (
    <div className="flex bg-white p-4 rounded-lg w-full max-w-2xl mx-auto my-4 ">
        <div className="flex flex-col items-start">

    {/* <div className='flex text-xl align-top'> <IoArrowBack/>     Night Sky Eikon</div> */}
        <img
            className="mr-4 flex "
            src="https://pbs.twimg.com/profile_banners/883531430680199168/1575846083/1500x500"
            alt="Cover Photo"
          />
        <div className='flex justify-between w-full'>
        <img
            className="w-32 h-32 rounded-full  flex mt-[-32px] ml-4 border-4 border-gray-100 border-solid"
            src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
            alt="Profile"
          />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-20 h-10 mr-8 mt-8">
            Follow
          </button>
          </div>
         <span className='text-2xl font-semibold'>Night Sky Eikon</span>
         <span className="text-gray-500">@NightSkyPrince_</span>

       <div className="mt-2">
       YouTube & Twitch Partner - Final Fantasy & JRPG Content Creator! For business inquiries: Ryan.M.Johnson91@gmail.com
       </div>

       <div className="flex mt-2">
       <span className='mr-6 hover:underline'> <span className='font-bold'>1,567</span> Following</span>
       <span className='hover:underline'><span className='font-bold'>12.5K</span> Followers</span>
       </div>

       <div className="flex w-full justify-evenly mt-6">
       <span className='profile-tab'>Barks</span>

        <span>Replies </span> 
        <span>Media</span>  
        <span>Likes</span> 
       </div>

       <Barklist/>

       
            </div>
            </div>
  )
}

export default Profile