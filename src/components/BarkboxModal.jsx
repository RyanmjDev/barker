import React from 'react';
import BarkBox from './Barkbox';

const BarkboxModal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };


  return (
    <>
        {/* Whats in Style in the div below is a work around for Chrome so that the blur scales properly. Stackover flow saving me. LOL */}
      <div
        className="fixed inset-0 z-40 bg-white bg-opacity-10 backdrop-blur-sm"
        style={{ width: '100vw', height: '100vh', filter: 'blur(0)' }} 
        onClick={closeModal}
      ></div>
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-16" onClick={handleClickOutside}>
        <div className="relative w-auto mx-auto sm:w-4/6 md:w-1/2 lg:w-1/3"> {/* Adjust width here */}
          <div className="relative flex flex-col w-full border-0 rounded-lg BarkboxModal-Dark
          modal-animation">
            <button
              className="absolute top-0 right-0 p-1 mt-2 mr-2 text-2xl font-semibold leading-none text-white bg-transparent border-0 text-opacity-50 focus:outline-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex-auto p-6">
              <BarkBox closeModal={closeModal}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarkboxModal;
