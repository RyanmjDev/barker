import React, {useEffect} from 'react'
import Reaction from './Reaction'
import Divider from './Divider'
import Barkbox from './Barkbox'
import Bark from './Bark'
import axios from 'axios'
import { formatDate } from '../utils/formatDate'

const HighlightedBark = ({barkId, bark}) => {

  return (
    <div className="p-4 rounded-lg w-full max-w-2xl mx-auto my-4 ">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
          alt="Profile"
        />
            <div className="flex flex-col">
                <span className='font-semibold'>Night Sky Eikon</span>
                <span className="text-gray-500">@{bark?.user?.username}</span>
            </div>
         </div>

         <div className='text-2xl mt-2'>
           {bark.content}
        </div>

      <div className='text-muted mt-2 '> {formatDate(bark.createdAt)}</div>  

       <Divider/>
        <div class="reactions">
            <span className='hover:underline pr-6'>  <span className='font-bold'>65 </span>Rebarks</span>
            <span className='hover:underline pr-6'>  <span className='font-bold'>4 </span> Quotes</span>
            <span className='hover:underline'>  <span className='font-bold'> {bark.likes && bark.likes.length} </span>  Likes</span>
        </div>
        <Divider/>

        <Reaction size="large"/>
        <Divider/>

        <Barkbox/>


         
        </div>

  )
}

export default HighlightedBark