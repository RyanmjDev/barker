import React, { useState, useEffect, useContext } from "react";
import { IoArrowBack } from "react-icons/io5";
import Bark from "../bark/Bark";
import Barklist from "../barklist/Barklist";
import Cookies from "js-cookie";

import { profileLinks } from "../../utils/profileLinks";
import { api, usersURL, profileURL } from "../../utils/data";

import "../../app.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import ProfilePic from "./ProfilePic";

import BarkboxModalContext from "../../context/BarkboxModalContext";
import VerticalDivider from "../common/VerticalDivider";

const Profile = () => {
  const { openEngagementModal } = useContext(BarkboxModalContext);

  const userData = useContext(UserContext);
  const [profileUser, setProfileUser] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [profile, setProfile] = useState("");
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const { username } = useParams();

  const [selectedTab, setSelectedTab] = useState("user");

  const fetchProfile = async () => {

    try {
      await api.get(`${profileURL}${username}`).then((res) => {
        console.log(res.data);
        setProfile(res.data.profile);
        setDisplayName(res.data.displayName);
        setProfileUser(res.data.username);
        setFollowers(res.data.followers);
        setFollowing(res.data.following);
        setIsFollowing(res.data.isFollowing);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const onFollow = async () => {

    await api
      .post(`${usersURL}${username}/follow`, {})
      .then((res) => {
        console.log(res);
        setIsFollowing(!isFollowing);
      });
  };

  return (
    <div className="flex p-4 rounded-lg w-full max-w-2xl mx-auto my-4 ">
      <div className="flex flex-col items-start">
        {/* <div className='flex text-xl align-top'> <IoArrowBack/>     Night Sky Eikon</div> */}
        <img
          className="mr-4 flex "
          src="https://pbs.twimg.com/profile_banners/883531430680199168/1575846083/1500x500"
          alt="Cover Photo"
        />
        <div className="flex justify-between w-full">

        <ProfilePic size="large"/>

          {userData.username === profileUser ? (
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
        </div>
        <span className="text-2xl font-semibold">{displayName}</span>
        <span className="text-gray-500">@{profileUser}</span>

        <div className="mt-2">{profile}</div>

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

        <div className="flex w-full justify-evenly mt-6">
          {profileLinks.map((profileLink, index) => {
            return (
              <button
                onClick={() => setSelectedTab(profileLink.type)}
                className={`flex flex-col items-center justify-center w-1/12 ${
                  selectedTab === profileLink.type ? "profile-tab" : ""
                }`}
                key={index}
              >
                <span>{profileLink.text}</span>
              </button>
            );
          })}
        </div>

        <Barklist type={selectedTab} username={username} key={selectedTab} />
      </div>
    </div>
  );
};

export default Profile;
