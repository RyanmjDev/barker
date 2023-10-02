import React from 'react'
import { Link  } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';

import ProfilePic from '../profile/ProfilePic';


const UserHeading = ({userProfile, content, createdAt}) => {
  return (
    <>
     <Link to={`/profile/${userProfile?.username}`}>
        <div className="flex items-start">

        <ProfilePic size="medium"/>

          <div className="flex flex-col">
            <span className="font-semibold">{userProfile?.displayName}</span>
            <span className="text-gray-500">@{userProfile?.username}</span>
          </div>
        </div>
      </Link>
      <div className="text-2xl mt-2">{content}</div>
      <div className="text-muted mt-2 ">{formatDate(createdAt)}</div>
    </>
  )
}

export default UserHeading