import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Divider from "./Divider";
import Reaction from "./Reaction";
import { timeSince } from "../utils/formatDate";
import { allBarksURL } from "../utils/data";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import axios from 'axios'
import ProfilePic from "./ProfilePic";



const Bark = ({ barkId, isReplyMode, content, user, date, likes, isLikedByUser, replies }) => {
  if (!content) {
    return null;
  }
  
  const handleClick = (event) => {
    window.location.href = `/bark/${barkId}`;
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  const handleDeleteClick = async(event) => {
    event.stopPropagation();
    const token = Cookies.get("token"); // Gets token for login
    const headers = {
       withCredentials: true,
       headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
     };
     await axios.delete(`${allBarksURL}/${barkId}`, headers)
     .then((res)=> {
        console.log(res)
     })
  }

  return (
    <div
      className="rounded-lg w-full max-w-2xl mx-auto my-2 cursor-pointer"
      onClick={handleClick}
    >
   {!isReplyMode &&  <Divider />}

      <div className="flex items-start">
      
      <ProfilePic size="medium" profileLink={`/profile/${user}`} onClick={handleLinkClick} />

        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <Link to={`/profile/${user}`} onClick={handleLinkClick}>
              <span className="font-bold hover:underline truncate">
                Night Sky Eikon
              </span>
            </Link>
            <span className="text-gray-500 ml-2">{`@${user}`}</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-gray-500">{timeSince(date)}</span>
          
          {!isReplyMode &&  <div className="flex ml-auto">
              <BsThreeDots onClick={handleDeleteClick}/>
            </div> }
          </div>

          <p className=" mb-2 text-md">{content}</p>
        </div>
      </div>

     {!isReplyMode && <Reaction barkId={barkId} content={content} likes={likes} user={user} date={date} isLikedByUser={isLikedByUser} replies={replies}/> }
    </div>
  );
};

export default Bark;
