import React from 'react'

const EditFollowBtn = ({username, profileUser, isFollowing, onFollow}) => {
  return (
    <>
              {username === profileUser ? (
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-20 h-10 mr-8 mt-8">
              Edit
            </button>
          ) : (
            <button
              className={` ${isFollowing ?
                 "border-2 border-white hover:border-red-500 hover:text-red-500"
                :
                 "bg-blue-500 hover:bg-blue-700"
              } 
            text-white font-bold py-2 px-4 rounded-full w-32 h-10 mr-8 mt-8`}
              onClick={onFollow}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          )}
    </>
  )
}

export default EditFollowBtn