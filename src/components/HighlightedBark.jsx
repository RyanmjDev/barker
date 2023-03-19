import React from 'react'
import Reaction from './Reaction'
import Divider from './Divider'
import Barkbox from './Barkbox'


const HighlightedBark = () => {
  return (
    <div className="bg-white p-4 rounded-lg w-full max-w-2xl mx-auto my-4 ">
      <div className="flex items-start">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
          alt="Profile"
        />
            <div className="flex flex-col">
                <span className='font-semibold'>Night Sky Eikon</span>
                <span className="text-gray-500">@NightSkyPrince_</span>
            </div>
         </div>

         <div className='text-2xl mt-2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Laborum voluptatum, veritatis earum nisi sapiente aut numquam nobis ad accusamus sed illo perferendis magni rerum, neque sint, cum esse corrupti obcaecati.
        </div>

      <div className='text-muted mt-2 '>1:28 PM · Mar 16, 2023</div>  

       <Divider/>
        <div class="reactions">
            <span className='hover:underline pr-6'>  <span className='font-bold'>65 </span>Rebarks</span>
            <span className='hover:underline pr-6'>  <span className='font-bold'>4 </span> Quotes</span>
            <span className='hover:underline'>  <span className='font-bold'>420 </span> Likes</span>
        </div>
        <Divider/>

        <Reaction size="large"/>
        <Divider/>

        <Barkbox/>
         
        </div>

  )
}

export default HighlightedBark