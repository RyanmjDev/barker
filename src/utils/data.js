import axios from 'axios';
import Cookies from "js-cookie";

export const allBarksURL = '/api/barks/';
export const loginURL = '/api/users/login/';
export const usersURL = '/api/users/';
export const profileURL = '/api/users/profile/';

// export const notificationURL = '/api/users/notifications'
export const notificationURL = '/api/notifications'
export const readNotificationsURL = '/api/notifications/readAll'
const baseURL = 'http://localhost:3000'



export const api = axios.create({
  baseURL: baseURL, // Currently doesn't work login
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use((config) => {
  const token = Cookies.get('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});






export const getURL = (URL) => {
    return baseURL + URL;
}

export const getUrlByType = (page, type, username, barkId) => {
  switch (type) {
    case 'user':
      return `${usersURL}${username}/barks`;
    case 'replies':
      return `${allBarksURL}${barkId}/replies`;
    case 'likes':
      return `${usersURL}${username}/likes`;
    default:
      return `${allBarksURL}?page=${page}`;
  }
};



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