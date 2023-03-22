import React from 'react'
import { FaHome } from 'react-icons/fa'
import Bark from '../components/Bark'
import Barkbox from '../components/Barkbox'

const Home = () => {
  return (
    <>
     <div className="hidden md:flex p-4 items-center rounded-lg w-full max-w-2xl mx-auto my-4 text-2xl">
                <FaHome className="w-6 h-6 mr-2 text-blue-400" />
        <h1 className="text-lg font-bold">Home</h1>
        <hr className="my-4" />
 </div>
    <Barkbox/>

    <Bark/>
    <Bark/>
    <Bark/>
    <Bark/>
    <Bark/>

   
    </>
  )
}

export default Home