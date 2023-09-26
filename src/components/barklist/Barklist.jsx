import React, { useEffect, useState, useRef } from 'react';
import Bark from '../bark/Bark';
import Cookies from 'js-cookie';
import axios from 'axios';
import { api, getUrlByType, usersURL } from '../../utils/data';

const Barklist = ({ type, username, barkId, newBark }) => {
  const [page, setPage] = useState(1);
  const [barks, setBarks] = useState([]);

  const lastBarkElementRef = useRef(null);


  const fetchBarks = async () => {

    try {
      const res = await api.get(getUrlByType(page, type, username, barkId));
      const barklist = res.data;

      if (Array.isArray(barklist)) {
        const newBarks = barklist.map((bark, index) => {
          const isLastBark = index === barklist.length - 1;
          return (
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
              ref={isLastBark ? lastBarkElementRef : null}
            />
          );
        });

        setBarks((prevBarks) => {
          const uniqueBarks = newBarks.filter(
            (newBark) => !prevBarks.some((prevBark) => prevBark.key === newBark.key)
          );
          return [...prevBarks, ...uniqueBarks];
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBarks();
  }, [page]);


  // useEffect for infinite scroller
  useEffect(() => {
    if (!lastBarkElementRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(lastBarkElementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [barks]);

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

  return <>{barks}

  </>;
};

export default Barklist;
