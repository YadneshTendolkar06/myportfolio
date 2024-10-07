import React, {useState,useRef} from 'react';
import { Fade } from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';
import myprofileImage from "../assets/personal-img.jpg"
import { motion } from "framer-motion";

function introduction({reference}) {

    const [intro,setIntro] = useState([ `Hello I'm Yadnesh Tendolkar`,`I am Computer Engineer.`]);
  return (
    <>
    <div id='about' className='font-poppins text-white text-4xl tracking-tighter font-semibold px-5 '>
          <div className='flex flex-col md:flex-row justify-between md:mx-[250px] '>
          <Fade direction='left'>
            <div className='text-[4vh] md:text-4xl pt-24 md:py-40'><h1>About</h1>
            <Typewriter
  options={{
    strings:intro ,
    autoStart: true,
    loop: true,
  }}
/>
              <div className='mb-2 md:mt-12 w-[25vw] md:w-[10vw] md:h-[6vh] flex justify-center items-center rounded-full text-[3vh] text-zinc-800 bg-zinc-100 font-poppins '>
                <a href='https://drive.google.com/file/d/1FhkjmX8RaKcVyuiDDMAy6_xDUdYHeJ-g/view?usp=sharing'><button>Resume</button></a>
              </div>

            </div>
            </Fade>

            <div className='md:w-96 md:py-40 ' >
            <Fade direction='right'>
              <img src={myprofileImage} className='rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-orange-400 '></img>
            </Fade>
            </div>
            </div>
          </div>
    </>
  )
}

export default introduction