import { useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Features from './components/Features'
import HowItsWorks from './components/HowItsWorks'
import Footer from './components/Footer'
import * as Sentry from '@sentry/react'
import Model from './components/Model'
const  App = () => {
  
  
  return (
    
   <main className='bg-black'>
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <HowItsWorks/>
    <Footer/>
   </main>
  )
}
// export default App;
export default Sentry.withProfiler(App);
