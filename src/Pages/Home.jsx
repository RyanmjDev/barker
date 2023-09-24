import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import Barkbox from '../components/barkbox/Barkbox'
import Barklist from '../components/barklist/Barklist'
import VerticalDivider from '../components/common/VerticalDivider'




const Home = () => {
  // Home component represents the main landing page of the application.
  // It renders the Barkbox for creating new barks and Barklist to display a list of barks.


  const [newBark, setNewBark] = useState(null); // Whenever the user posts new Barks, this will be used to locally update
  const handleNewBark = (bark) => {
    setNewBark(bark);
  };

  return (
    <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto px-3">
  
     <div className="hidden md:flex p-4 items-center rounded-lg w-full max-w-2xl mx-auto my-4 text-2xl">
                <FaHome className="w-6 h-6 mr-2 text-blue-400" />
        <h1 className="text-lg font-bold">Home</h1>
        <hr className="my-4" />
      </div>

    
    <Barkbox onNewBark={handleNewBark}/>
    <Barklist newBark={newBark}/>
    <VerticalDivider/>

    
    
    </div>
  )
}

export default Home