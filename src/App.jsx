import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Work from './components/Work'
import Expirence from './components/Expirence'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Work/>
      <Expirence/>
      
    </>
  )
}

export default App
