import React from 'react'

const FollowCount = ({openEngagementModal, followers, following}) => {
  return (
    <div className="flex mt-2">
    <span className="mr-6 hover:underline"
    onClick={() => openEngagementModal()}
    >
      {" "}
      <span className="font-bold">
        {following}</span> Following
    </span>
    <span className="hover:underline" 
    onClick={() => openEngagementModal()}
    >
      <span className="font-bold">{followers}</span> Followers
    </span>
  </div>

  )
}

export default FollowCount