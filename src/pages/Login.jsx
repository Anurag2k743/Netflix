import React from 'react'
import Navbar from '../Components/Navbar'
import Signinfooter from '../Components/signinfooter'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="relative bg-[url('/login.jpg')] bg-cover bg-center w-full h-[850px]">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-10"></div>
        <div className="relative z-50">
          <div className="container">
            <nav className="pt-3 px-4">
              <Link to="/" className='text-5xl text-[#e50914] font-bold tracking-wider'>Netflix</Link>
            </nav>
            <div className='flex justify-center items-center ]'>
              <div className='max-w-[480px] w-full bg-black bg-opacity-80 p-16 rounded-md'>
                <h1 className='text-4xl text-white font-bold mb-4'>Sign In</h1>
                <form className='flex flex-col space-y-4'>
                  <div className="relative w-full">
                    <input
                      type="email"
                      id="email"
                      className="peer w-full bg-black bg-opacity-50 rounded-md border border-gray-500 px-4 pt-6 pb-1 text-lg text-white placeholder-transparent focus:border-white focus:outline-none focus:ring-0"
                      placeholder="Email address" />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 z-10 origin-[0] scale-100 transform text-md text-gray-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-gray-300">
                      Email or mobile number
                    </label>
                  </div>

                  <div className="relative w-full">
                    <input
                      type="password"
                      id="password"
                      className="peer w-full bg-black bg-opacity-50 rounded-md border border-gray-500 px-4 pt-6 pb-1 text-lg text-white placeholder-transparent focus:outline-2 focus:ring-0"
                      placeholder="Password" />
                    <label
                      htmlFor="password"
                      className="absolute left-4 top-4 z-10 origin-[0] scale-100 transform text-md text-gray-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-focus:top-0 peer-focus:scale-75 peer-focus:text-gray-300">
                      Password
                    </label>
                  </div>

                  <button className='px-4 py-2 bg-[#e50914] text-white rounded-md font-bold'>Sign In</button>
                  <span className='text-center text-white font-semibold'>OR</span>
                  <button className='px-4 py-2 bg-[#333434] text-white rounded-md font-bold'>Use a sign-in Code</button>
                  <a href="/" className='underline text-white text-center'>Forgot password</a>

                  <div className='flex gap-2 items-center'>
                    <input type="checkbox" name="" id="" className='h-4 w-4' />
                    <span className='text-white text-sm'>Remember me</span>
                  </div>
                  <span className='text-[#9fb3b6] '>New to Netflix?<a className='font-bold text-white hover:underline' target="_self" href="/"> Sign up now.</a></span>
                  <p className='text-[#9fb3b6] text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Signinfooter/>
    </>
  )
}

export default Login
