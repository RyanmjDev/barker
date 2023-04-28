import React, { useEffect, useState } from 'react';
import Bark from './Bark';
import Cookies from 'js-cookie';
import axios from 'axios';
import { allBarksURL, usersURL } from '../utils/data';

const Barklist = ({ type, username, barkId }) => {
  const [barks, setBarks] = useState([]);

  const getUrlByType = () => {
    switch (type) {
      case 'user':
        return `${usersURL}/${username}/barks`;
      case 'replies':
        return `${allBarksURL}/${barkId}/replies`;
      case 'likes':
        return `${usersURL}/${username}/likes`;
      default:
        return allBarksURL;
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

  return <>{barks}</>;
};

export default Barklist;
