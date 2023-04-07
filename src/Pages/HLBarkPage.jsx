import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HighlightedBark from '../components/HighlightedBark';
import { allBarksURL } from '../utils/data';
import axios from 'axios';
import Cookies from 'js-cookie'

import Barkbox from '../components/Barkbox'
import Barklist from '../components/Barklist'


const HLBarkPage = () => {
  const { barkId } = useParams();
  const [bark, setBark] = useState({});

  useEffect(() => {
    const fetchBark = async () => {
      try {
        const token = Cookies.get("token"); // Gets token for login
        const headers = {
           withCredentials: true,
           headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
           },
         };
  

        await axios.get(`${allBarksURL}/${barkId}`, headers).then((res) => {
          const newBark = res.data;
          setBark(newBark);
        });
      } catch (error) {
        console.log(error);
      }
    };


    fetchBark();
  }, []);

  useEffect(() => {
     console.log(bark);
  }, [bark])



  return (
    <>
      <HighlightedBark barkId={barkId} bark={bark}  />

      {bark.user?.username &&
        <Barkbox replyTo={bark.user.username} replyId={barkId}/>
      } 

      {barkId &&  <Barklist type="replies" barkId={barkId}/>}
    </>
  );
};

export default HLBarkPage;
