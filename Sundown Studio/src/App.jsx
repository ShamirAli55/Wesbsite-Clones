import React from 'react'
import HeroSection from './pages/HeroSection'
import VideoSection from './pages/VideoSection'
import AboutSection from './pages/AboutSection'
import Projects from './pages/Projects'
import Slider from './pages/Slider'
import Footer from './pages/Footer'

const App = () => {
  return (
    <>
    <div className='bg-[#EFEAE3] overflow-x-hidden relative z-[10]'>
      <HeroSection />
      <VideoSection/>
      <AboutSection/>
      <Projects/>
      <Slider/>
    </div>
    <Footer/>
    </>
  )
}

export default App