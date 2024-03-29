import React from "react";
import Divider from "../common/Divider";
import Reaction from "./Reaction";
import { timeSince } from "../../utils/formatDate";
import { allBarksURL } from "../../utils/data";
import { Link } from "react-router-dom";
import ProfilePic from "../profile/ProfilePic";
import useDeleteBark from '../../hooks/useDeleteBark';
import Options from "./Options";

const Bark = React.forwardRef((props, ref) => {
  const { barkId, isReplyMode, content, user, displayName, date, likes, isLikedByUser, replies } = props;

  if (!content) return null;

  const deleteBark = useDeleteBark();
  const handleClick = () => window.location.href = `/bark/${barkId}`;
  const handleLinkClick = (event) => event.stopPropagation();
  
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    deleteBark(barkId);
  }


  return (
    <div
      className="rounded-lg w-full max-w-2xl mx-auto my-1 px-4 cursor-pointer"
      onClick={handleClick}
      ref={ref}
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

            <Options isReplyMode={isReplyMode} handleDeleteClick={handleDeleteClick}/>

          </div>

          <p className="mb-2 text-md">{content}</p>
        </div>
      </div>

      {!isReplyMode && <Reaction {...props} />}
    </div>
  );
});

export default Bark;
