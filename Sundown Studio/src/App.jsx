import React from 'react'
import HeroSection from './pages/HeroSection'
import VideoSection from './pages/VideoSection'
import AboutSection from './pages/AboutSection'
import Projects from './pages/Projects'
import Slider from './pages/Slider'
const App = () => {
  return (
    <div className='bg-[#EFEAE3] overflow-x-hidden'>
      <HeroSection />
      <VideoSection/>
      <AboutSection/>
      <Projects/>
      <Slider/>
    </div>
  )
}

export default App