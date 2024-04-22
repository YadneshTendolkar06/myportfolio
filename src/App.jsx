import React ,{useState, useRef} from 'react';
import Navbar from './navbar';
import Introduction from './introduction';
import { Fade } from "react-awesome-reveal";
import './index.css';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

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