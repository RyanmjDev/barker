import axios from 'axios';
import Cookies from "js-cookie";
import { api, allBarksURL } from '../utils/data';

 const submitBark = async (barkText, replyTo, replyId) => {
  
  const url = replyTo ? `${allBarksURL}${replyId}` : allBarksURL;

  try {
    const response = await api.post(url, { content: barkText });
    return response.data;
  } catch (error) {
    console.error('Error creating bark:', error);
    throw error; // re-throw the error so it can be handled by the calling component
  }
};

export default submitBark;