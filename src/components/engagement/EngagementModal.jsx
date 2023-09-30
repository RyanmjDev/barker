import React, { useContext, useEffect } from "react";
import EngagementList from "./EngagementList";
import BarkboxModalContext from "../../context/BarkboxModalContext";

import ModalBackground from "../common/ModalBackground";
import ModalCloseBtn from "../common/ModalCloseBtn";

const EngagementModal = () => {
    const { isEngagementModalOpen, closeEngagementModal } = useContext(BarkboxModalContext);

    useEffect(() => {
        console.log(isEngagementModalOpen);

    }, [isEngagementModalOpen])

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeEngagementModal();
    }
  };


  if (!isEngagementModalOpen) {
    return null;
  }

  return (
    <>
    <ModalBackground closeModal={closeEngagementModal}/>

      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-16"
        onClick={handleClickOutside}
      >
        <div className="relative w-11/12 mx-auto sm:w-3/5 md:w-3/5 lg:w-1/3">
          <div
            className="relative flex flex-col w-full border-0 rounded-lg modal-dark
          modal-animation"
          >
            <ModalCloseBtn closeModal={closeEngagementModal}/>

                    <div className="flex-auto p-2 text-xl">
                        Liked By
                    </div>

                    <EngagementList/>

          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementModal;
