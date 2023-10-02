import React from 'react'

const BarkEngagements = ({openEngagementModal, likes}) => {
  return (
    <div className="reactions">
    <span className="hover:underline pr-6">
      <span className="font-bold">65</span> Rebarks
    </span>
    <span className="hover:underline pr-6">
      <span className="font-bold">4</span> Quotes
    </span>
    <span className="hover:underline" onClick={() => openEngagementModal()}>
      <span className="font-bold">{likes && likes.length}</span> Likes
    </span>
  </div>
  )
}

export default BarkEngagements