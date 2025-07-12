
import './App.css'
import Accordion from './Components/Accordion'
import Banner from './Components/Banner'
import NetflixFooter from './Components/NetflixFooter'
import Reasons from './Components/Reasons'
import Slider from './Components/Slider'

function App() {

  return (
    <>
      <Banner />
      <div className='bg-black'>
        <Slider />
        <Reasons />
        <Accordion />
        <NetflixFooter/>
      </div>
    </>
  )
}

export default App
