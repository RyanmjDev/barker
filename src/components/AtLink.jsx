import React from 'react'
import { Link } from 'react-router-dom'



const AtLink = ({username}) => {
  return (
    <Link to={`/profile/${username}`} > @{username}</Link>
  )
}

export default AtLink