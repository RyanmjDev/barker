
import React, { useEffect, useState, createContext, useContext } from "react";
import Barkbox from './components/Barkbox';
import Sidebar from './components/Sidebar';
import Bark from './components/Bark';
import BottomNavbar from './components/BottomNavBar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './components/Profile';
import HighlightedBark from './components/HighlightedBark';
import VerticalDivider from './components/VerticalDivider';
import { Outlet } from 'react-router-dom';

import {headers, usersURL, CACHE_KEY} from './utils/data'
import axios from "axios";

import UserContext from "./context/UserContext";
import useCachedUserData from "./hooks/useCachedUserData";

import BarkboxModal from "./components/BarkboxModal";



function App() {

 
  const userData = useCachedUserData(usersURL, headers, CACHE_KEY);

  return (
    <>
    <UserContext.Provider value={userData}>
          <div className="flex flex-col md:flex-row">
            <div className="flex-initial">
                <Sidebar/>
                <BottomNavbar/>
            </div>
          </div>
         <Outlet/>
   
         </UserContext.Provider>
    </>
  );
}

export default App;
