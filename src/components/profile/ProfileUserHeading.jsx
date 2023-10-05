import React from 'react'

const ProfileUserHeading = ({displayName, profileUser, profile}) => {
  return (
    <>
        <span className="text-2xl font-semibold">{displayName}</span>
        <span className="text-gray-500">@{profileUser}</span>
        <div className="mt-2">{profile}</div>
    </>
  )
}

export default ProfileUserHeading