import React, { useEffect } from "react";
import ModalBackground from "./ModalBackground";
import ModalCloseBtn from "./ModalCloseBtn";

const Modal = ({ isOpen, closeModal, children, title }) => {
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalBackground closeModal={closeModal} />
      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-16"
        onClick={handleClickOutside}
      >
        <div className="relative w-11/12 mx-auto sm:w-3/5 md:w-3/5 lg:w-1/3">
          <div className="relative flex flex-col w-full border-0 rounded-lg modal-dark modal-animation">
            {title && <div className="flex-auto p-2 text-xl">{title}</div>}
            <ModalCloseBtn closeModal={closeModal} />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
