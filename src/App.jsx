import React, { useEffect, useState, createContext, useContext } from "react";
import Barkbox from "./components/Barkbox";
import Bark from "./components/Bark";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./components/Profile";
import HighlightedBark from "./components/HighlightedBark";
import VerticalDivider from "./components/VerticalDivider";
import { Outlet } from "react-router-dom";

import { headers, getURL, usersURL, CACHE_KEY } from "./utils/data";
import axios from "axios";

import UserContext from "./context/UserContext";
import useCachedUserData from "./hooks/useCachedUserData";

import BarkboxModal from "./components/BarkboxModal";

import Navigation from "./components/Navigation";
import {BarkboxModalProvider } from "./context/BarkboxModalContext";

import socket from "./utils/socket"
import Cookies from "js-cookie";
import jwtDecode from 'jwt-decode';

function App() {

// App component serves as the root component of the application.
// It sets up context providers for user data and the Barkbox modal,
// and renders the Navigation component and Outlet for routing.

  const userData = useCachedUserData(getURL(usersURL), headers, CACHE_KEY);

  useEffect(() => {
    const token = Cookies.get('token');
  
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id
      socket.emit('join', userId);
    }
  }, [Cookies.get('token')]);
  


  return (
    <>
      <UserContext.Provider value={userData}>
        <BarkboxModalProvider >
        <div className="flex flex-col md:flex-row">
          <div className="flex-initial">
            <Navigation />
         <BarkboxModal  />
          </div>
        </div>
        <Outlet />
        </BarkboxModalProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
