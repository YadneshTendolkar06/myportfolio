import React ,{useState, useRef} from 'react';
import Navbar from './components/navbar';
import Introduction from './components/introduction';
import { Fade } from "react-awesome-reveal";
import './index.css';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const ref = useRef(null)

  return (
    <>
    <div ref={ref} className='w-full h-screen box-border bg-black '>
      <Navbar  />
      <Introduction reference={ref} />
      </div>
      <div className='w-full min-h-screen box-border bg-black'>
      <Skills />
      </div>
      <div className='w-full min-h-screen box-border bg-orange-400'>
        <Projects />
      </div>
        <Contact />

    </>
  )
}

export default App