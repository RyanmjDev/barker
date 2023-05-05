import React, {useState, useEffect, useContext} from 'react'
import Sidebar from './Sidebar';
import BottomNavbar from './BottomNavBar';

import UserContext from "../context/UserContext";
import BarkboxModalContext from "../context/BarkboxModalContext";

import socket from "../utils/socket"


const Navigation = ({ children }) => {

const [unreadCount, setUnreadCount] = useState(0);
const userData = useContext(UserContext);
const { openBarkboxModal } = useContext(BarkboxModalContext);

  
useEffect(() => {
      const handleNewNotification = (count) => {
        console.log(count);
        setUnreadCount(count);
      }
      socket.on('updateUnreadCount', handleNewNotification);

   
      return () => {
        socket.off('updateUnreadCount', handleNewNotification);
      };
  
 
  
    }, [])

 

  return (
    <>
    <Sidebar userData={userData} openBarkboxModal={openBarkboxModal} unreadCount={unreadCount}/>
    <BottomNavbar  userData={userData}  openBarkboxModal={openBarkboxModal} unreadCount={unreadCount} />
    {children}
  </>
  )
}

export default Navigation