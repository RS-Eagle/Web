import { useState } from 'react'
import './App.css'
import Header from './components/Home/Header'
import Hero from './components/Home/Hero'
import InfinityMarquee from './components/Home/InfinityMarquee'
import Services from './components/Home/Services'
import About from './components/Home/About'
import Reviews from './components/Home/Reviews'


function App() {
  
  const [toggleMode, setToggleMode ] = useState(true)

  document.body.style.backgroundColor = toggleMode ? "#1f2937 " : "white";



  return (
    <div className={!toggleMode?"":"dark "}>
      <div className='relative overflow-hidden'>
      <Header props={{setToggleMode,toggleMode}}/>
      <Hero toggleMode={toggleMode}/>
      <InfinityMarquee/>
      </div>
      <Services/>
      <Reviews/>
      <About/>
    </div>
  )
}

export default App
