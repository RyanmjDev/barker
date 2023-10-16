import React, {useContext} from 'react'
import Modal from '../../modal/Modal'

import BarkboxModalContext from '../../../context/BarkboxModalContext';

const EditProfileModal = () => {
const {isEditProfileModalOpen, closeEditProfileModal} = useContext(BarkboxModalContext);
  return (
    <Modal isOpen={isEditProfileModalOpen} closeModal={closeEditProfileModal} title="Edit Profile">
        <h2> Testing</h2>
    </Modal>
  )
}

export default EditProfileModal