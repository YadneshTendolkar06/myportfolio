import React from 'react'
import Image1 from '../assets/portfolio.png'
import Image2 from '../assets/e-comm.png'

function projects() {
  return (
    <>
      <div id='Project' className='w-full h-screen rounded-t-3xl px-6 md:px-14 bg-[#EFD593]'>
        <div className='py-14 font-semibold font-poppins text-[8vh] md:text-[12vh] tracking-tight'>
          <h1 className='px-[16vw] md:px-[5vh]'>Projects</h1>
          <div className='w-full border-t-2 border-zinc-400 md:-mb-8 md:mt-[3vh] '></div>
        </div>


      <div className='flex flex-col md:flex-row gap-10 md:mt-[5vh] font-poppins font-semibold'>
      <div className='-mt-[4vh]'>
        <h1 className='ml-[3vh]'>Portfolio</h1>
        <div className=' md:mx-[1vw] h-[30vh] md:w-full md:h-[60vh] pt-8 md:pt-16 bg-zinc-900  rounded-3xl overflow-hidden object-cover'>
        <a href='https://github.com/YadneshTendolkar06/myportfolio'>
          <img src={Image1}></img>
          </a>
        </div>
        </div>

      <div className='-mt-[4vh]'>
      <h1 className='ml-[3vh]'>E-commerce Website</h1>
        <div className=' md:mx-[1vw] h-[30vh] md:h-[60vh] pt-6 md:pt-16 rounded-3xl overflow-hidden bg-zinc-900'>
          <img src={Image2}></img>

        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default projects