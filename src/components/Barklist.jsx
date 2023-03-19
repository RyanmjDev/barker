import React, { useState } from 'react'
import Bark from './Bark'

const Barklist = () => {

    const [barks, setBarks] = useState([<Bark/>, <Bark/>]);

  return (
     <>
     {barks.map((bark) => {
        return bark;
     })}
     </>
  )
}

export default Barklist