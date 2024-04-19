import React, {useState} from 'react';
import { Fade } from "react-awesome-reveal";

function introduction() {
    var [intro,upd] = useState("Hello, I'm Yadnesh Tendolkar. i am Computer Engineer.");
  return (
    <>
    <div className=' text-white text-4xl tracking-tighter font-semibold px-5 '>
          <div className='flex flex-col md:flex-row justify-between md:mx-[150px] '>
          <Fade direction='left'>
            <div className='text-4xl md:py-20'><h1>About</h1>
              <div className='animate-typing overflow-hidden whitespace-wrap border-r-4 border-r-white text-2xl text-white font-bold'>
                {intro}
                </div>
            </div>
            </Fade>
            <div className='md:w-96 md:py-20'>
            <Fade direction='right'>
              <img src='../public/personal img.jpg' ></img>
            </Fade>
            </div>
            </div>
          </div>
    </>
  )
}

export default introduction