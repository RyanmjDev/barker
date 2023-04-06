import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HighlightedBark from '../components/HighlightedBark';
import { allBarksURL } from '../utils/data';
import axios from 'axios';

import Barkbox from '../components/Barkbox'
import Barklist from '../components/Barklist'

const HLBarkPage = () => {
  const { barkId } = useParams();
  const [bark, setBark] = useState({});

  useEffect(() => {
    const fetchBark = async () => {
      try {
        await axios.get(`${allBarksURL}/${barkId}`).then((res) => {
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