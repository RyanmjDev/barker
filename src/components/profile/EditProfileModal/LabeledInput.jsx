import React, { useState } from 'react';

const LabeledInput = ({ label, maxLength, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`border ${isFocused ? 'border-2 border-blue-500' : 'border-gray-500'} mx-auto mt-2 border rounded w-full`}>
      <div>
        <div className="flex justify-between items-center px-2"> 
          <label className={`${isFocused ? 'text-blue-500' : 'text-gray-500'} text-sm `} htmlFor={label}>
            {label}
          </label>
          <div className="text-gray-500 text-sm">
            { isFocused ? `${value.length}/${maxLength}` : '' }
          </div>
        </div>


      { maxLength < 120 ? 
        <input
          className="shadow bg-transparent appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none"
          id={label}
          type="text"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
       />

       : 

       <textarea 
       className="shadow bg-transparent appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none resize-none"
       id={label} 
       cols="30" 
       rows="2"
       value={value}
       maxLength={maxLength}
       onChange={onChange}
       onFocus={() => setIsFocused(true)}
       onBlur={() => setIsFocused(false)}
       />
       
       }
      </div>
    </div>
  );
}

export default LabeledInput;
