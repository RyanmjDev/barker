import React from 'react'
import AtLink from '../common/AtLink';

const ReplyTo = ({replyTo}) => {
  return (
    <div className="flex flex-box ml-16">
    <span>Replying To&nbsp;</span>
    <AtLink username={replyTo} />
  </div>
  )
}

export default ReplyTo