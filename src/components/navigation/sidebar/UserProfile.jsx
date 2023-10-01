import React from 'react'
import ProfilePic from "../../profile/ProfilePic";

import { BsThreeDots } from "react-icons/bs";

const UserProfile = ({displayName, username}) => {
  return (
    <div className="flex flex-start items-center fixed bottom-0 left-0 mb-4 ml-2 hover:bg-gray-800 rounded-full">
   
          <ProfilePic size="medium"/>

            <div className="hidden lg:block">
              <span className="font-bold">{displayName}</span>
              <br />
              <span className="text-gray-500">{username}</span>
            </div>
            <BsThreeDots className="hidden ml-4 lg:block" />
          </div>
  )
}

export default UserProfile