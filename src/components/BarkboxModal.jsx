import React, { useContext, useEffect } from "react";
import BarkBox from "./Barkbox";
import Bark from "./Bark";
import BarkboxModalContext from "../context/BarkboxModalContext";

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
      <div
        className="fixed inset-0 z-40 bg-gray-500 bg-opacity-10 backdrop-blur-sm "
        style={{ width: "100vw", height: "100vh", filter: "blur(0)" }}
        onClick={() => closeBarkboxModal()}
      ></div>
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
            <button
              className="absolute top-0 right-0 p-1 mt-2 mr-2 text-2xl font-semibold leading-none text-white bg-transparent border-0 text-opacity-50 focus:outline-none"
              onClick={() => closeBarkboxModal()}
            >
              &times;
            </button>
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
