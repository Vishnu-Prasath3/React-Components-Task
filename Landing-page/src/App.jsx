import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'

const url1="https://images.pexels.com/photos/4246192/pexels-photo-4246192.jpeg?auto=compress&cs=tinysrgb&w=600"
const url2="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww"
const url3="https://img.freepik.com/premium-photo/businessman-typing-laptop-modern-office_762139-11787.jpg?size=626&ext=jpg&ga=GA1.1.1526810182.1726134939&semt=ais_hybrid"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Section1 ></Section1>
      <Section2 url={url1}></Section2>
      <Section2 url={url2}></Section2>
      <Section2 url={url3}></Section2>
    </>
  )
}

export default App
