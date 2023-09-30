import React from 'react'

const ModalCloseBtn = ({closeModal}) => {
  return (
    <button
    className="absolute top-0 right-0 mt-2 mr-2 text-2xl font-semibold leading-none text-white bg-transparent border-0 text-opacity-50 focus:outline-none"
    onClick={() => closeModal()}
  >
    &times;
  </button>
  )
}

export default ModalCloseBtn