import React from 'react'
import logo from '/logo.svg'
import LanguageDropdown from './LanguageDropdown '
const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between items-center pt-3">
                <div> 
                    <span className='text-5xl text-[#e50914] font-bold tracking-wider'>Netflix</span>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <LanguageDropdown/>
                    <button className='px-4 text-white rounded-md py-2 bg-[#e50914] font-bold hidden  sm:block'>Sign In</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
