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

return (
  <Modal isOpen={isEditProfileModalOpen} closeModal={closeEditProfileModal} title="Edit Profile">
    <div className="flex flex-col items-start px-2">
      <ProfileBanner/>
      <div className="flex justify-between w-full">
        <ProfilePic size="large"/>
      </div>
    </div>

    <div className="w-full px-2 mx-auto">  {/* Wrapper div for alignment */}
      <LabeledInput
        label="Name"
        maxLength={50}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <LabeledInput
          label="Bio"
          maxLength={160}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
      />

      <LabeledInput 
        label="Location"
        maxLength={30}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <LabeledInput 
        label="Website"
        maxLength={100}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <div className="flex justify-end mt-4 mb-4">
        <button className="font-bold bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
            Save  
        </button>
      </div>
    </div>
  </Modal>
)

}

export default EditProfileModal