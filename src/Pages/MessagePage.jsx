import React from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

const MessagePage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navigation header */}
      <div className="bg-white py-2 px-4 flex items-center border-b">
        <div className="flex items-center">
          <FaRegArrowAltCircleLeft className="mr-4 text-blue-400" />
          <h1 className="text-2xl font-bold">Direct Messages</h1>
        </div>
      </div>

      {/* DM threads */}
      <div className="flex-grow flex">
        {/* List of DM threads */}
        <div className="w-1/3 border-r overflow-y-scroll">
          {/* DM thread */}
          <div className="flex p-2 border-b hover:bg-gray-100 cursor-pointer">
            <img
              src="https://pbs.twimg.com/profile_images/1445469351079555586/W9XKj8Gh_400x400.jpg"
              className="w-10 h-10 rounded-full mr-4"
              alt="Profile"
            />
            <div>
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-gray-600">How are you doing?</p>
            </div>
          </div>
          {/* Add more DM threads here */}
        </div>

        {/* DM conversation */}
        <div className="flex-grow p-4">
          <div className="flex flex-col mb-4">
            {/* Incoming DM */}
            <div className="flex items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1445469351079555586/W9XKj8Gh_400x400.jpg"
                className="w-10 h-10 rounded-full mr-4"
                alt="Profile"
              />
              <div className="bg-gray-100 rounded-lg py-2 px-3">
                <p className="text-gray-600">Hey, how are you?</p>
              </div>
            </div>

            {/* Outgoing DM */}
            <div className="flex items-center justify-end">
              <div className="bg-blue-400 rounded-lg py-2 px-3">
                <p className="text-white">I'm doing well, thanks for asking!</p>
              </div>
              <img
                src="https://pbs.twimg.com/profile_images/1385636878842003456/uXfXvkb8_400x400.jpg"
                className="w-10 h-10 rounded-full ml-4"
                alt="Profile"
              />
            </div>
          </div>

          {/* Add more DM conversations here */}
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
