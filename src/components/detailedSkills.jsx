import React, { useEffect } from 'react'
import { Fade } from "react-awesome-reveal";


function detailedSkills({data}) {
   useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;

    })
  })

  return (
    <>
        <Fade dumping>
        <div className='w-[75vw]  md:w-[45vw] h-[13vh] ml-[12vw] md:ml-[14vw] mt-6 md:mt-[4vh] text-neutral-700 bg-[#FFB85D] tracking-tight rounded-3xl font-poppins text-[7vh] md:text-[9vh] flex justify-center items-center font-semibold '>
          <div className='w-10 md:w-20'>
          <img src={data.img} />
          </div>

          {data.name}
        </div>
        </Fade>
    </>

  )
}

export default detailedSkills