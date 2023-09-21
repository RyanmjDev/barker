import React from 'react'
import { Link } from "react-router-dom";
import BlankProfile from '../../assets/blankprofile.webp'

const ProfilePic = ({size, profileLink, onClick}) => {

const findSize = () => {
    switch(size){
        case "small":
            return "w-8 h-8 mr-2"
            break;
        case "medium":
            return "w-12 h-12 mr-4"
            break;
        case "large":
            return "w-32 h-32 flex mt-[-32px] ml-4 border-4 border-gray-100 border-solid"
            break;
        default:
            return "w-12 h-12 mr-4";

    }
}

  return (
    <>
    <Link to={profileLink} onClick={onClick}>
            <img
            className={`rounded-full  ${findSize()}`}
            src={BlankProfile}
            alt="Profile"
        />
  </Link>
  </>
  )
}

export default ProfilePic