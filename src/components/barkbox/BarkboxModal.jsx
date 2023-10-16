import React, { useContext } from "react";
import BarkBox from "./Barkbox";
import Bark from "../bark/Bark";
import BarkboxModalContext from "../../context/BarkboxModalContext";
import Modal from "../modal/Modal";

const BarkboxModal = () => {
  const { isBarkboxModalOpen, closeBarkboxModal, replyToBark } = useContext(BarkboxModalContext);

  return (
    <Modal isOpen={isBarkboxModalOpen} closeModal={closeBarkboxModal}>
      {replyToBark ? (
        <>
          <Bark
            isReplyMode={true}
            content={replyToBark.content || ""}
            displayName={replyToBark.displayName || ""}
            user={replyToBark.user || ""}
            date={replyToBark.date || ""}
            barkId={replyToBark.barkId}
          />
          <BarkBox replyTo={replyToBark?.user} replyId={replyToBark?.barkId} closeModal={closeBarkboxModal} />
        </>
      ) : (
        <BarkBox closeModal={closeBarkboxModal} />
      )}
    </Modal>
  );
};

export default BarkboxModal;
