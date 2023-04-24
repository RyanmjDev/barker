import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import {getURL, notificationURL} from '../utils/data'
import { Link } from "react-router-dom";
import { BsBell } from 'react-icons/bs';
import {AiFillHeart  } from 'react-icons/ai';
import ProfilePic from '../components/ProfilePic';
import UserNotification from '../components/UserNotification';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);


  const fetchNotifications = async () => {
      try {
        const token = Cookies.get("token"); // Gets token for login
        const headers = {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };

      await axios.get(getURL(notificationURL), headers)
        .then((res)=> {
          console.log(res.data);
           setNotifications(res.data)
        })
      } catch(error)
      {
        console.log(error);
      }
  }

  useEffect(() => {  
    fetchNotifications();
  }, []);

  return (
    <div className="p-4 w-full max-w-2xl mx-auto my-4">
      <div className="flex items-center">
        <BsBell className="w-6 h-6 mr-2 text-blue-400" />
        <h1 className="text-lg font-bold">Notifications</h1>
      </div>
      <hr className="my-4" />
      <ul>
        {notifications.map((notification) => (
          
          <UserNotification  key={notification._id} notification={notification}/>

        ))}
      </ul>
      {notifications.length === 0 && (
        <p className="text-gray-500">You have no notifications.</p>
      )}
    </div>
  );
      }  

export default NotificationsPage;
