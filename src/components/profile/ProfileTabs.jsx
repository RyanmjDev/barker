import React from 'react'

const ProfileTabs = ({profileLinks, setSelectedTab}) => {
  return (
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
  )
}

export default ProfileTabs