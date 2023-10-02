import React, { useState, useEffect, useContext } from 'react';
import Reaction from '../bark/Reaction';
import Divider from '../common/Divider';


import BarkboxModalContext from "../../context/BarkboxModalContext";
import BarkEngagements from './BarkEngagements';
import UserHeading from './UserHeading';

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

        <UserHeading userProfile={userProfile} content={bark.content} createdAt={bark.createdAt}/>
        <Divider />

        <BarkEngagements openEngagementModal={openEngagementModal} likes={bark.likes}/>
        
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
