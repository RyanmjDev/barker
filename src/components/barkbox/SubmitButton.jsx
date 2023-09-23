import React from 'react'

const SubmitButton = ({barkText, handleBark}) => {

  return (
  <>
    <button
    className="px-4 py-2 rounded-full bg-blue-400 text-white font-semibold disabled:opacity-50"
    disabled={barkText === ''}
    onClick={handleBark}
  >
    Bark
  </button>
</>
  )
}

export default SubmitButton