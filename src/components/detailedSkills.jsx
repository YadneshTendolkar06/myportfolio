import React, { useEffect } from 'react'
import { Fade } from "react-awesome-reveal";


function detailedSkills({data}) {


  return (
    <>
        <Fade dumping>
        <div className='w-[75vw] px-4 md:w-[45vw] h-[13vh] ml-[12vw] md:ml-[14vw] mt-6 md:mt-[4vh] space-x-3 text-neutral-700 bg-[#FFB85D] tracking-tight rounded-3xl font-poppins text-4xl md:text-3xl flex justify-center items-center font-semibold '>
          <div>
          <img className='w-10 md:w-14' src={data.img} />
          </div>

          <div>
          <p>

            {data.name}
            </p>

          </div>
        </div>
        </Fade>
    </>

  )
}

export default detailedSkills