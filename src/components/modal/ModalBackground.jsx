import React from 'react'

const ModalBackground = ({closeModal}) => {
  return (
    <div
    className="fixed inset-0 z-40 bg-gray-500 bg-opacity-10 backdrop-blur-sm "
    style={{ width: "100vw", height: "100vh", filter: "blur(0)" }}
    onClick={() => closeModal()}
  ></div>
  )
}

export default ModalBackground