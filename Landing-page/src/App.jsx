import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Section1></Section1>
      <Section2></Section2>
    </>
  )
}

export default App
