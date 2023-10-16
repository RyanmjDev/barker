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
import ProfileBanner from "./ProfileBanner";
import EditFollowBtn from "./EditFollowBtn";
import FollowCount from "./FollowCount";
import ProfileTabs from "./ProfileTabs";
import ProfileUserHeading from "./ProfileUserHeading";

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
   

        <ProfileBanner/>

        <div className="flex justify-between w-full">
            <ProfilePic size="large"/>
            <EditFollowBtn username={userData.username} profileUser={profileUser}
            isFollowing={isFollowing} onFollow={onFollow} />
        </div>

        <ProfileUserHeading displayName={displayName} profileUser={profileUser} profile={profile}/>


      <FollowCount openEngagementModal={openEngagementModal} followers={followers} following={following}/>
      <ProfileTabs profileLinks={profileLinks} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Barklist type={selectedTab} username={username} key={selectedTab} />
      </div>
    </div>
  );
};

export default Profile;
