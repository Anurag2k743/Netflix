import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const EmailForm = () => {

  const [IsActive ,setActive] = useState()

  return (
    <div className="sm:flex items-center justify-between w-full max-w-2xl mx-auto gap-2 mt-3">
      <div className="relative w-full">
        <input
          type="email"
          id="email"
          className="peer w-full bg-black bg-opacity-50 rounded-md border border-gray-500 px-6 pt-4 pb-2 text-lg text-white placeholder-transparent focus:border-white focus:outline-none focus:ring-0"
          placeholder="Email address"/>

        <label
          htmlFor="email"
          className="absolute left-6 top-4  z-10 origin-[0] scale-100 transform text-lg text-gray-300 transition-all peer-placeholder-shown:top-3 py-2peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-gray-300">
          Email address
        </label>

      </div>
      <button
        type="submit"
        className="font-bold px-6 py-3 bg-[#e50914] text-white text-xl flex items-center gap-2 rounded border border-transparent whitespace-nowrap mx-auto mt-4 sm:mt-0">
        Get Started <MdOutlineKeyboardArrowRight fontSize={24} />
      </button>
    </div>
  );
};

export default EmailForm;