import React from 'react'
import ProfilePic from '../profile/ProfilePic'

const RecentUserReactions = ({notification}) => {
  return (
    <div className="flex flex-row">
    <ProfilePic
      size="small"
      profileLink={`/profile/${notification.fromUser?.username}`}
    />
    <ProfilePic
      size="small"
      profileLink={`/profile/${notification.fromUser?.username}`}
    />
    <ProfilePic
      size="small"
      profileLink={`/profile/${notification.fromUser?.username}`}
    />
  </div>
  )
}

export default RecentUserReactions