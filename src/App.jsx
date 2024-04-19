import React ,{useState} from 'react';
import Navbar from './navbar';
import Introduction from './introduction';
import { Fade } from "react-awesome-reveal";
import './index.css';
import './fonts/Jersey10-Regular.ttf';

function App() {


  return (
    <>
    <div className='w-full h-screen box-border bg-black overflow-hidden '>

      <Navbar />

      <Introduction />


      </div>

      <div className='w-full h-screen box-border bg-orange-400'>
        <div className='skills font-'>
          hello
        </div>
      </div>
    </>
  )
}

export default App