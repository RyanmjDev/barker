import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import ProfilePic from './ProfilePic';

const UserNotification = ({ notification }) => {

  const getNotificationMessage = () =>{
    switch(notification.type) {
      case "like": 
        if(notification.engagements.likes <= 1)
        {
        return `${notification.fromUser?.username} has liked your post!`
        } else {
          return `${notification.fromUser?.username} and ${notification.engagements?.likes - 1} others have liked your post!`
        }

      break;
      default:
      return `${notification.fromUser?.username} has liked your post!`
    }
  }

  return (
    <li
      key={notification._id}
      className={`${
        notification.read ? 'opacity-50 ' : ''
      }  cursor-pointer hover:bg-gray-800 rounded-lg px-4 py-2 mb-2`}
    >
      <div className="flex">
        <div>
          <AiFillHeart className="text-red-500 text-xl mr-4" />
        </div>
        <div>
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
          <p>{getNotificationMessage()}</p>
          <p className="text-gray-500 text-sm">
            <Link to={`/bark/${notification.relatedBark._id}`}>
              {notification.relatedBark.content}
            </Link>
          </p>
        </div>
      </div>
    </li>
  );
};

export default UserNotification;
