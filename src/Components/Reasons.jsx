import React from 'react';

const reasonsdata = [
    {
        title: "Enjoy on your TV",
        content: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
        icon: "/icon1.png",
    },
    {
        title: "Download your shows to watch offline",
        content: 'Save your favourites easily and always have something to watch.',
        icon: "/icon2.png",
    },
    {
        title: "Watch everywhere",
        content: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
        icon: "/icon3.png",
    },
    {
        title: "Create profiles for kids",
        content: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
        icon: "/icon4.png",
    },
];

const Reasons = () => {
    return (
        <div className="bg-[#000000] py-10">
            <div className="container">

                <h2 className="text-white text-4xl font-bold py-4">More reasons to join</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-5'>
                    {reasonsdata.map(({ title, content, icon }, index) => (
                        <div key={index} className="bg-custom-gradient p-6 rounded-xl flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
                                <p className="text-[#9594a0] text-base font-semibold">{content}</p>
                            </div>
                            <div className='mt-8 flex justify-end'>
                                <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reasons;
