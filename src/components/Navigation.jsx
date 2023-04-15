import React, {useState, useContext} from 'react'
import Sidebar from './Sidebar';
import BottomNavbar from './BottomNavBar';

import UserContext from "../context/UserContext";
import BarkboxModalContext from "../context/BarkboxModalContext";


const Navigation = ({ children }) => {

  const userData = useContext(UserContext);
  const { openBarkboxModal } = useContext(BarkboxModalContext);

  return (
    <>
    <Sidebar userData={userData} openBarkboxModal={openBarkboxModal}/>
    <BottomNavbar  userData={userData}  openBarkboxModal={openBarkboxModal} />
    {children}
  </>
  )
}

export default Navigation