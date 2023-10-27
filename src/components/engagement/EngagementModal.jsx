import React, { useContext } from "react";
import EngagementList from "./EngagementList";
import BarkboxModalContext from "../../context/BarkboxModalContext";
import Modal from "../modal/Modal";

const EngagementModal = ({type}) => {
  const { isEngagementModalOpen, closeEngagementModal } = useContext(BarkboxModalContext);

const getTitle = (type) => {
    switch(type)
    {
      case "following":
        return "Following"
      case "followers":
        return "Followed By";
      case "likes":
        return"Liked By";  
        
        default:
          return "";

    }
}


  return (
    <Modal isOpen={isEngagementModalOpen} closeModal={closeEngagementModal} title={getTitle(type)}>
      <EngagementList type={type}/>
    </Modal>
  );
};

export default EngagementModal;
