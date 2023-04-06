import React from 'react';
import BarkBox from './Barkbox'

const BarkboxModal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto mx-auto my-6 max-w-3xl">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg">
          <button
            className="absolute top-0 right-0 p-1 mt-2 mr-2 text-2xl font-semibold leading-none text-black bg-transparent border-0 text-opacity-50 focus:outline-none"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="flex-auto p-6">
            <BarkBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarkboxModal;
