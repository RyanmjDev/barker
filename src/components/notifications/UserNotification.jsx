import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import ProfilePic from '../profile/ProfilePic'
import RecentUserReactions from './RecentUserReactions';

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
    <Link to={`/bark/${notification.relatedBark?._id}`}>
    <li
      key={notification._id}
      className={`${
        notification.read ? 'opacity-50 bg-gray-900' : 'bg-gray-400'
      }  cursor-pointer hover:bg-gray-800 rounded-lg px-4 py-2 mb-2`}
    >
      <div className="flex">
        <div>
          <AiFillHeart className="text-red-500 text-xl mr-4" />
        </div>
        <div>

          <RecentUserReactions notification={notification}/>
        
          <p>{getNotificationMessage()}</p>
          <p className="text-gray-500 text-sm">
        
              {notification.relatedBark?.content}
         
          </p>
        </div>
      </div>
    </li>
    </Link>
  );
};

export default UserNotification;
