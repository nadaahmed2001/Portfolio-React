import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import AboutSection from './components/About/AboutSection'
import SkillsSection from './components/Skills/SkillsSection'
import FooterSection from './components/Footer/FooterSection'
import './App.css'

function App() {
  return(
    <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <FooterSection />
    
    </>
  )

}
export default App
