import React, { useContext } from "react";
import EngagementList from "./EngagementList";
import BarkboxModalContext from "../../context/BarkboxModalContext";
import Modal from "../modal/modal";

const EngagementModal = () => {
  const { isEngagementModalOpen, closeEngagementModal } = useContext(BarkboxModalContext);

  return (
    <Modal isOpen={isEngagementModalOpen} closeModal={closeEngagementModal} title="Liked By">
      <EngagementList />
    </Modal>
  );
};

export default EngagementModal;
