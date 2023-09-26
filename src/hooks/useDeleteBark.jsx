import { useCallback } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { api, allBarksURL } from '../utils/data';


const useDeleteBark = () => {
  const deleteBark = useCallback(async (barkId) => {

    try {
      await api.delete(`${allBarksURL}${barkId}`);
      console.log(`Deleted bark with id ${barkId}`);
    } catch (error) {
      console.error(`Error deleting bark with id ${barkId}: `, error);
    }
    }, []);
    
    return deleteBark;
    };
    
    export default useDeleteBark;
