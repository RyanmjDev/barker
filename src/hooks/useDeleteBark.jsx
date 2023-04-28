import { useCallback } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { allBarksURL } from '../utils/data';


const useDeleteBark = () => {
  const deleteBark = useCallback(async (barkId) => {
    const token = Cookies.get("token");
    const headers = {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(`${allBarksURL}/${barkId}`, headers);
      console.log(`Deleted bark with id ${barkId}`);
    } catch (error) {
      console.error(`Error deleting bark with id ${barkId}: `, error);
    }
    }, []);
    
    return deleteBark;
    };
    
    export default useDeleteBark;
