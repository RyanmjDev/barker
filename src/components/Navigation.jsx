import React, {useState} from 'react'
import Sidebar from './Sidebar';
import BottomNavbar from './BottomNavBar';
import BarkboxModal from './BarkboxModal';


const Navigation = ({ children }) => {
    const [isBarkboxModalOpen, setIsBarkboxModalOpen] = useState(false);

    const openBarkboxModal = () => {
      setIsBarkboxModalOpen(true);
    };
  
    const closeBarkboxModal = () => {
      setIsBarkboxModalOpen(false);
    };
  
    
  return (
    <>
    <Sidebar onBarkButtonClick={openBarkboxModal} />
    <BottomNavbar onBarkButtonClick={openBarkboxModal} />
    <BarkboxModal isOpen={isBarkboxModalOpen} closeModal={closeBarkboxModal} />
    {children}
  </>
  )
}

export default Navigation