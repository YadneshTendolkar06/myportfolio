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
            <div className='text-4xl pt-24 md:py-40'><h1>About</h1>
            <Typewriter
  options={{
    strings:intro ,
    autoStart: true,
    loop: true,
  }}
/>
            </div>
            </Fade>

            <motion.div drag dragConstraints={reference} className='md:w-96 md:py-40 ' >
            <Fade direction='right'>
              <img src={myprofileImage} className=' md:rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-orange-400 '></img>
            </Fade>
            </motion.div>
            </div>
          </div>
    </>
  )
}

export default introduction