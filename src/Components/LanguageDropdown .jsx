import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

export default function LanguageDropdown() {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { label: "English", value: "en" },
    { label: "हिन्दी", value: "hi" },
  ];

  const handleSelect = (lang) => {
    setLanguage(lang.label);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left -z-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black bg-opacity-50 text-white rounded-md shadow-xl border border-[#FFFFFF5E]">
        <FaGlobe className="text-sm" />
        {language}
        <svg
          className="w-4 h-4 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor" >
          <path d="M5.5 7l4.5 4.5L14.5 7h-9z" />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {languages.map((lang) => (
            <li
              key={lang.value}
              onClick={() => handleSelect(lang)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white" >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
