import React, { useEffect, useState } from 'react';
import Bark from './Bark';
import Cookies from 'js-cookie';
import axios from 'axios';
import {getURL, allBarksURL, usersURL } from '../utils/data';

const Barklist = ({ type, username, barkId, newBark}) => {
  const [barks, setBarks] = useState([]);

  const getUrlByType = () => {
    switch (type) {
      case 'user':
        return `${getURL(usersURL)}${username}/barks`;
      case 'replies':
        return `${getURL(allBarksURL)}${barkId}/replies`;
      case 'likes':
        return `${getURL(usersURL)}${username}/likes`;
      default:
        return getURL(allBarksURL);
    }
  };

  const fetchBarks = async () => {
    const token = Cookies.get('token');
    const headers = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.get(getUrlByType(), headers);
      console.log(res.data);
      const barklist = res.data;

      if (Array.isArray(barklist)) {
        setBarks(
          barklist.map((bark) => (
            <Bark
              key={bark._id}
              barkId={bark._id}
              content={bark.content}
              user={bark.user.username}
              displayName={bark.user.displayName}
              date={bark.createdAt}
              likes={bark.likes.length}
              isLikedByUser={bark.isLikedByUser}
              replies={bark.replies.length}
            />
          ))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBarks();
  }, []);

  useEffect(() => {
    if (newBark) {
      setBarks([
        <Bark
          key={newBark._id}
          barkId={newBark._id}
          content={newBark.content}
          user={newBark.user.username}
          displayName={newBark.user.displayName}
          date={newBark.createdAt}
          likes={newBark.likes.length}
          isLikedByUser={newBark.isLikedByUser}
          replies={newBark.replies.length}
        />,
        ...barks,
      ]);
    }
  }, [newBark]);
  

  return <>{barks}</>;
};

export default Barklist;
