import React, { useState, useEffect, useContext } from 'react';
import Reaction from './Reaction';
import Divider from '../common/Divider';
import { formatDate } from '../../utils/formatDate';
import { Link } from 'react-router-dom';

import BarkboxModalContext from "../../context/BarkboxModalContext";
import ProfilePic from '../profile/ProfilePic';

const HighlightedBark = ({ barkId, bark }) => {
  const [loading, setLoading] = useState(true);
  const { openEngagementModal } = useContext(BarkboxModalContext);

  useEffect(() => {
    if (bark) {
      setLoading(false);
    }
  }, [bark]);

  if (loading) {
    return (
      <div className="p-4 rounded-lg w-full max-w-2xl mx-auto my-4">
        <p>Loading...</p>
      </div>
    );
  }

  const userProfile = bark?.user;

  return (
    <div className="p-4 rounded-lg w-full max-w-2xl mx-auto my-4">
      <Link to={`/profile/${userProfile?.username}`}>
        <div className="flex items-start">

        <ProfilePic size="medium"/>

          <div className="flex flex-col">
            <span className="font-semibold">{userProfile?.displayName}</span>
            <span className="text-gray-500">@{userProfile?.username}</span>
          </div>
        </div>
      </Link>
      <div className="text-2xl mt-2">{bark.content}</div>
      <div className="text-muted mt-2 ">{formatDate(bark.createdAt)}</div>
      <Divider />
      <div className="reactions">
        <span className="hover:underline pr-6">
          <span className="font-bold">65</span> Rebarks
        </span>
        <span className="hover:underline pr-6">
          <span className="font-bold">4</span> Quotes
        </span>
        <span className="hover:underline" onClick={() => openEngagementModal()}>
          <span className="font-bold">{bark.likes && bark.likes.length}</span> Likes
        </span>
      </div>
      <Divider />
      <Reaction
        size="large"
        barkId={barkId}
        isLikedByUser={bark ? bark.isLikedByUser : false}
        content={bark.content}
        likes={bark.likes}
        user={userProfile?.username}
        date={bark.createdAt}
      />
      <Divider />
    </div>
  );
};

export default HighlightedBark;
