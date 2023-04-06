import React, { useEffect, useState } from 'react'
import Bark from './Bark'
import Cookies from 'js-cookie'

import {allBarksURL, usersURL} from '../utils/data'
import axios from 'axios';



const Barklist =  ({type, username, barkId}) => {
    const [barks, setBarks] = useState([]);


    const getUrlByType = () => {
      switch(type){
         case "user":
         return `${usersURL}/${username}/barks`;
         break;

         case "replies":
            return `${allBarksURL}/${barkId}/replies`

         default: 
         return allBarksURL;
       }
    }

    const fetchBarks = async () => {
      const token = Cookies.get("token"); // Gets token for login
      const headers = {
         withCredentials: true,
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
         },
       };

  
 
        // const url = username ?  `${usersURL}/${username}/barks` : allBarksURL;

     await axios.get(getUrlByType(), headers)
      .then((res)=> {
         console.log(res.data)
         const barklist = res.data;
         if (Array.isArray(barklist)) {
         setBarks(barklist.map((bark) => {
            
            return(
               <Bark  key={bark._id} barkId={bark._id} content={bark.content} user={bark.user.username} date={bark.createdAt}
               likes={bark.likes.length} isLikedByUser={bark.isLikedByUser} replies={bark.replies.length}/>
            )
         }));
      }

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