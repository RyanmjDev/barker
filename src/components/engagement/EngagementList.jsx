import React from "react";


const EngagementList = ({type}) => {
  // Filler user data
  const users = [
    { id: 1, username: "user1", displayName: "User One" },
    { id: 2, username: "user2", displayName: "User Two" },
    { id: 3, username: "user3", displayName: "User Three" },
  ];



  return (
    <div className="p-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between mb-4 last:mb-0"
        >
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://pbs.twimg.com/profile_images/1564774195019632640/EYZ42tpe_400x400.jpg"
              alt="Profile"
            />
            <div>
              <span className="font-bold">{user.displayName || user.username}</span>
              <br />
              <span className="text-gray-500">@{user.username}</span>
            </div>
          </div>
          <button className="px-4 py-1 text-white font-bold bg-blue-500 rounded-full hover:bg-blue-600 ">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
};

export default EngagementList;
