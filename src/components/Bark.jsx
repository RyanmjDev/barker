import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Divider from "./Divider";
import Reaction from "./Reaction";
import { timeSince } from "../utils/formatDate";
import { allBarksURL } from "../utils/data";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from 'axios';
import ProfilePic from "./ProfilePic";
import useDeleteBark from '../hooks/useDeleteBark';

const Bark = ({ barkId, isReplyMode, content, user, displayName, date, likes, isLikedByUser, replies }) => {
  if (!content) {
    return null;
  }

  const deleteBark = useDeleteBark();

  const handleClick = (event) => {
    window.location.href = `/bark/${barkId}`;
  };

  const handleLinkClick = (event) => {
    event.stopPropagation();
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deleteBark(barkId);
  }

  return (
    <div
      className="rounded-lg w-full max-w-2xl mx-auto my-1 cursor-pointer"
      onClick={handleClick}
    >
      {!isReplyMode && <Divider />}

      <div className="flex items-start">
        <ProfilePic size="medium" profileLink={`/profile/${user}`} onClick={handleLinkClick} />

        <div className="flex flex-col w-full">
          <div className="flex items-center">
            <Link to={`/profile/${user}`} onClick={handleLinkClick}>
              <span className="font-bold hover:underline truncate">
               {displayName}
              </span>
            </Link>
            <span className="text-gray-500 ml-2">{`@${user}`}</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-gray-500">{timeSince(date)}</span>

            {!isReplyMode && <div className="flex ml-auto">
              <BsThreeDots onClick={handleDeleteClick} />
            </div>}
          </div>

          <p className="mb-2 text-md">{content}</p>
        </div>
      </div>

      {!isReplyMode && <Reaction barkId={barkId} content={content} likes={likes} displayName={displayName} user={user} date={date} isLikedByUser={isLikedByUser} replies={replies} />}
    </div>
  );
};

export default Bark;
