import React, { useState } from 'react';
import EmailForm from './EmailForm';

const Accordion = () => {
  const faqData = [
    {
      id: 1,
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      id: 3,
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      id: 4,
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      id: 5,
      question: " What can I watch on Netflix?",
      answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },



  ];

  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <div className='pt-10'>
          {faqData.map((item) => (
            <div key={item.id} className="mt-2">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex justify-between items-center p-3 md:p-5 text-left text-white text-xl bg-[#2d2d2d] hover:bg-[#444] focus:outline-none"  >
                <span className='text-xl md:text-2xl'>{item.question}</span>
                <span className=" text-5xl font-thin">
                  {openId === item.id ? '×' : '+'}
                </span>
              </button>
              {openId === item.id && (
                <div className="p-3 md:p-5 text-white text-xl md:text-2xl bg-[#2d2d2d] border-t border-black">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <div className="container">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
