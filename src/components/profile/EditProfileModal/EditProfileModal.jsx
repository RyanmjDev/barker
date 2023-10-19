import React, {useContext, useState} from 'react'
import Modal from '../../modal/Modal'

import BarkboxModalContext from '../../../context/BarkboxModalContext';
import ProfileBanner from '../ProfileBanner';
import ProfilePic from '../ProfilePic';
import LabeledInput from './LabeledInput';

const EditProfileModal = () => {
const {isEditProfileModalOpen, closeEditProfileModal} = useContext(BarkboxModalContext);

const [name, setName] = useState('');
const [bio, setBio] = useState('');
const [location, setLocation] = useState('');
const [website, setWebsite] = useState('');

const [isFocused, setIsFocused] = useState(false);

return (
  <Modal isOpen={isEditProfileModalOpen} closeModal={closeEditProfileModal} title="Edit Profile">
    <div className="flex flex-col items-start px-2">
      <ProfileBanner/>
      <div className="flex justify-between w-full">
        <ProfilePic size="large"/>
      </div>
    </div>

   <LabeledInput
    label="Name"
    maxLength={50}
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

    <LabeledInput 
      label="Location"
      maxLength={30}
      value={location}
      onChange={(e) => setName(e.target.value)}
    />



  </Modal>
)
}

export default EditProfileModal