import React, { useContext } from 'react'
import { FaBookmark } from 'react-icons/fa';
import Barklist from '../components/barklist/Barklist';



const BookmarkPage = () => {

  return (
    <div className="p-4 w-full max-w-2xl mx-auto my-4">
      <div className="flex items-center">
        <FaBookmark className="w-6 h-6 mr-2 text-blue-400" />
        <h1 className="text-lg font-bold">Bookmarks</h1>
      </div>
      <hr className="my-4" />
      {/* NEEDS FIXING   */}
      <Barklist type={'bookmarks'}/>  
      {/* !!!! */}
    </div>
  );
}

export default BookmarkPage