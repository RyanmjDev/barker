import React, {useState, useEffect} from 'react'
import { FaBell } from 'react-icons/fa';


const NotificationIcon = () => {
    const [unreadCount, setUnreadCount] = useState(0);

  return (
    <>
    <div className='relative inline-block mr-4'>
        <FaBell size={24}/>
        <div className="absolute top-0 left-4 bg-blue-500 text-white rounded-full px-1 text-xs min-w-[14px] leading-[14px] ">
            {unreadCount}
        </div>
        </div>
    </>
  )
}

export default NotificationIcon