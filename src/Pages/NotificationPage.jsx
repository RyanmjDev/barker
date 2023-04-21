import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import {getURL, notificationURL} from '../utils/data'
import { Link } from "react-router-dom";
import { BsBell } from 'react-icons/bs';
import {AiFillHeart  } from 'react-icons/ai';

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
    // TODO: Fetch notifications from backend
    // For now, use dummy data


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
          <li
            key={notification._id}
            className={`${
              notification.read ? 'opacity-50' : ''
            } hover:bg-gray-100 rounded-lg px-4 py-2 mb-2`}
          >
            <div className="flex">
    
            <div>
                <AiFillHeart className="text-red-500 text-xl mr-4" />
            </div>
          
            <div>
            <img
                className="w-8 h-8 rounded-full mr-4"
                src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
                alt="Profile"
              />
              <p>{notification.type} from {notification.fromUser?.username}</p>
              <p className="text-gray-500 text-sm">
                <Link to={`/bark/${notification.relatedBark._id}`}>{notification.relatedBark.content} </Link>
              </p>
            </div>
            </div>
          </li>
        ))}
      </ul>
      {notifications.length === 0 && (
        <p className="text-gray-500">You have no notifications.</p>
      )}
    </div>
  );
      }  

export default NotificationsPage;
