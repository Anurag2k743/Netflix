import React from 'react';
import EmailForm from './EmailForm';
import Navbar from './Navbar';
const Banner = () => {
    return (
        <div className="relative bg-[url('/banner.jpg')] bg-cover bg-center w-full">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>
            <div className="relative z-10 container mx-auto px-4">
                <Navbar />
                <div className="text-center py-[100px] md:py-[200px] xl:py-[240px] text-white">
                    <h1 className="text-4xl md:text-6xl  font-extrabold  md:max-w-4xl mx-auto">
                        Unlimited movies, TV  shows and more
                    </h1>
                    <h5 className="py-5 md:py-10 text-xl md:text-3xl font-bold">Starts at ₹149. Cancel at any time.</h5>
                    <p className='text-lg md:text-xl mb-3 md:mb-6'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <EmailForm />
                </div>
            </div>

            <div className="relative z-10 font-bold  py-1   rounded overflow-hidden before:content-[''] before:absolute before:inset-0 before:-mt-1 before:rounded-[inherit] before:bg-[linear-gradient(to_right,_rgba(33,13,22,1)_16%,_rgba(184,40,105,1),_rgba(229,9,20,1),_rgba(184,40,105,1),_rgba(33,13,22,1)_84%)] before:-z-10">
            </div>
        </div>
    );
};

export default Banner;


