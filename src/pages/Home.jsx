import React from 'react'
import Banner from '../Components/Banner'
import Slider from '../Components/Slider'
import Reasons from '../Components/Reasons'
import Accordion from '../Components/Accordion'
import NetflixFooter from '../Components/NetflixFooter'

const Home = () => {
  return (
    <div>
        <Banner/>
        <div className='bg-black'>
            <Slider/>
            <Reasons/>
            <Accordion/>
            <NetflixFooter/>
        </div>
    </div>
  )
}

export default Home
