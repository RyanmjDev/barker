export const allBarksURL = 'http://localhost:3000/api/barks';
export const loginURL = 'http://localhost:3000/api/users/login';
export const usersURL = 'http://localhost:3000/api/users/';
export const profileURL = 'http://localhost:3000/api/users/profile/';

export const notificationURL = '/api/users/notifications'
const baseURL = 'http://localhost:3000'

export const getURL = (URL) => {
  return baseURL + URL;
}

import Cookies from "js-cookie";
export const token = Cookies.get("token"); // Gets token for login
export const headers = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  
  export const CACHE_KEY = 'barker_userdata';
  export const clearCachedUserData = () => {
    localStorage.removeItem(CACHE_KEY);
  }