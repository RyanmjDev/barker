import React, { useEffect, useState } from 'react'
import Bark from './Bark'

import {allBarksURL} from '../utils/data'
import axios from 'axios';



const Barklist =  () => {

    const [barks, setBarks] = useState([]);

    const fetchBarks = async () => {
     await axios.get(allBarksURL)
      .then((res)=> {
         console.log(res.data)
         const barklist = res.data;
         setBarks(barklist.map((bark) => {
            
            return(
               <Bark barkId={bark._id} content={bark.content} user={bark.user.username} date={bark.createdAt}
               likes={bark.likes.length}/>
            )
         }));

      })
      .catch((error) => {
         console.log(error);
      })

    }


useEffect(() => {
   fetchBarks();
}, [])

  return (
     <>
     {barks.map((bark) => {
        return bark;
     })}
     </>
  )
}

export default Barklist