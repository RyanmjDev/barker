import React, { useState, useEffect, createContext } from "react";

const BarkboxModalContext = createContext();

export const BarkboxModalProvider = ({ children }) => {
  const [isBarkboxModalOpen, setIsBarkboxModalOpen] = useState(false);
  const [isEngagementModalOpen, setIsEngagementModalOpen] = useState(false);
  const [replyToBark, setReplyToBark] = useState(null)

  const openBarkboxModal = (barkData) => {
    if (barkData) {
      setReplyToBark(barkData);
    } 
          setIsBarkboxModalOpen(true);
  };
  
  const closeBarkboxModal = () => {
    setIsBarkboxModalOpen(false);
    setReplyToBark(null);
  };

  const openEngagementModal = () => {
    setIsEngagementModalOpen(true);
  }

  const closeEngagementModal = () => {
    setIsEngagementModalOpen(false);
  }

 


  return (
    <BarkboxModalContext.Provider
      value={{ 
      isBarkboxModalOpen, 
      openBarkboxModal, 
      closeBarkboxModal, 
      replyToBark, 
      isEngagementModalOpen,
      openEngagementModal,
      closeEngagementModal,
      }}>
      {children}
    </BarkboxModalContext.Provider>
  );
};

export default BarkboxModalContext;
