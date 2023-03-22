import React, { useState, useEffect } from 'react';
import { BsBell } from 'react-icons/bs';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // TODO: Fetch notifications from backend
    // For now, use dummy data
    setNotifications([
      {
        id: 1,
        text: 'New follower: @johndoe',
        timestamp: Date.now() - 100000,
        read: false,
      },
      {
        id: 2,
        text: 'Your tweet was liked by @janedoe',
        timestamp: Date.now() - 200000,
        read: true,
      },
      {
        id: 3,
        text: 'New message from @johndoe',
        timestamp: Date.now() - 300000,
        read: false,
      },
    ]);
  }, []);

  return (
    <div className="p-4 w-full max-w-2xl mx-auto my-4">
      <div className="flex items-center">
        <BsBell className="w-6 h-6 mr-2 text-blue-400" />
        <h1 className="text-lg font-bold">Notifications</h1>
      </div>
      <hr className="my-4" />
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`${
              notification.read ? 'opacity-50' : ''
            } hover:bg-gray-100 rounded-lg px-4 py-2 mb-2`}
          >
            <p className="text-gray-700">{notification.text}</p>
            <p className="text-gray-500 text-sm">
              {new Date(notification.timestamp).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
      {notifications.length === 0 && (
        <p className="text-gray-500">You have no notifications.</p>
      )}
    </div>
  );
};

export default NotificationsPage;
