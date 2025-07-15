// src/Components/Footer.jsx
import React from 'react';

const Signinfooter = () => {
  return (
    <footer className="bg-black text-gray-400 text-md px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <p className="mb-6">Questions? Call 000-800-919-1743 (Toll-Free)</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6 ">
          <a href="#" className="underline">FAQ</a>
          <a href="#" className="underline">Help Centre</a>
          <a href="#" className="underline">Terms of Use</a>
          <a href="#" className="underline">Privacy</a>
          <a href="#" className="underline">Cookie Preferences</a>
          <a href="#" className="underline">Corporate Information</a>
        </div>

        <div>
          <select className="bg-transparent border border-gray-500 px-4 py-1 text-white">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Signinfooter;
