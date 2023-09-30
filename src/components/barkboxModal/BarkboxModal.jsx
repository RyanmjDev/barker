import React, { useContext, useEffect } from "react";
import BarkBox from "../barkbox/Barkbox";
import Bark from "../bark/Bark";
import BarkboxModalContext from "../../context/BarkboxModalContext";
import ModalBackground from "../common/ModalBackground";
import ModalCloseBtn from "../common/ModalCloseBtn";

const BarkboxModal = () => {
  const { isBarkboxModalOpen, closeBarkboxModal, replyToBark } =
    useContext(BarkboxModalContext);


    useEffect(() => {
      console.log(replyToBark);
    }, [replyToBark])
 

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeBarkboxModal();
    }
  };


 if (!isBarkboxModalOpen) {
    return null;
  }
  
  return (
    <>
    <ModalBackground closeModal={closeBarkboxModal}/>

      <div
        className="fixed inset-0 z-50 flex items-start justify-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-16"
        onClick={handleClickOutside}
      >
        <div className="relative w-11/12 mx-auto sm:w-3/5 md:w-3/5 lg:w-1/3">
          {" "}
          {/* Adjust width here */}
          <div
            className="relative flex flex-col w-full border-0 rounded-lg modal-dark
          modal-animation"
          >

        <ModalCloseBtn closeModal={closeBarkboxModal}/>
                      
            <div className="flex-auto p-6">

              {replyToBark ? (
                <>
                  <Bark
                    isReplyMode={true}
                    content={replyToBark.content ? replyToBark.content : ""}
                    displayName={replyToBark.displayName ? replyToBark.displayName : ""}
                    user={replyToBark.user  ? replyToBark.user : ""}
                    date={replyToBark.date ? replyToBark.date : ""}
                    barkId={replyToBark.barkId}
                  />
                  <BarkBox  replyTo={replyToBark?.user} replyId={replyToBark?.barkId} closeModal={() => closeBarkboxModal()} />
                </>
              ) : (
                <BarkBox closeModal={() => closeBarkboxModal()} />
              )}

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BarkboxModal;
