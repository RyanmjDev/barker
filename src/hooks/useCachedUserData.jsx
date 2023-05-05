import { useState, useEffect } from "react";
import axios from "axios";

function useCachedUserData(url, headers, CACHE_KEY) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const cachedUserData = localStorage.getItem(CACHE_KEY);
    if (cachedUserData) {
      setUserData(JSON.parse(cachedUserData));
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(url, headers);
        console.log("User data received:", response.data);
        setUserData(response.data);
        localStorage.setItem(CACHE_KEY, JSON.stringify(response.data));
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    if (!cachedUserData) {
      fetchUserData();
    }
  }, [url, headers, CACHE_KEY]);

  return userData;
}

export default useCachedUserData;
