import axios from 'axios';
import Cookies from "js-cookie";
import { getURL, allBarksURL } from '../utils/data';

 const submitBark = async (barkText, replyTo, replyId) => {
  const token = Cookies.get("token");
  const headers = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const url = replyTo ? `${getURL(allBarksURL)}${replyId}` : getURL(allBarksURL);

  try {
    const response = await axios.post(url, { content: barkText }, headers);
    return response.data;
  } catch (error) {
    console.error('Error creating bark:', error);
    throw error; // re-throw the error so it can be handled by the calling component
  }
};

export default submitBark;