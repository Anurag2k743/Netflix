import React, { useState } from 'react'
import LanguageDropdown from './LanguageDropdown '
import { Link } from 'react-router-dom'
const Navbar = () => {


    return (
        <>
            <nav className="flex justify-between items-center pt-3">
                <div> 
                    <span className='text-4xl md:text-5xl text-[#e50914] font-bold tracking-wider'>Netflix</span>
                </div>
                <div className='flex justify-between items-center gap-2'>
                    <LanguageDropdown/>
                    <Link to="/login"><button className='px-4 text-white rounded-md py-2 bg-[#e50914] font-bold'>Sign In</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
