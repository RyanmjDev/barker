import React from 'react'

import {IoMdSettings} from 'react-icons/io'

const SettingsPage = () => {
  return (
    <div className="p-4 w-full max-w-2xl mx-auto my-4">
    <div className="flex items-center">
      <IoMdSettings className="w-6 h-6 mr-2 text-blue-400" />
      <h1 className="text-lg font-bold">Settings</h1>
    </div>
    <hr className="my-4" />
   
    <div>Change Password</div>
    <div>Change email</div>
    <div>Dark Mode</div>

    </div>
  )
}

export default SettingsPage