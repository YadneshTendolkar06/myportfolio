import React from 'react'
import Image1 from '../assets/portfolio.png'
import Image2 from '../assets/e-comm.png'
import Image3 from '../assets/ezylube.png'

function projects() {
  return (
    <>
      <div id='Project' className='pb-14 w-full rounded-t-3xl px-6 md:px-14 bg-[#EFD593]'>
        <div className='py-14 font-semibold font-poppins text-[8vh] md:text-[12vh] tracking-tight'>
          <h1 className='px-[16vw] md:px-[5vh]'>Projects</h1>
          <div className='w-full border-t-2 border-zinc-400 md:-mb-8 md:mt-[3vh] '></div>
        </div>


      <div className='flex flex-col md:flex-col gap-10 md:mt-[5vh] font-poppins font-semibold'>
      <div className='-mt-[4vh]'>
      <h1 className='md:ml-72 text-xl md:text-2xl ml-[3vh]'>ezylube.in</h1>
        <div className=' md:mx-64 h-[30vh] md:h-[550px] pt-6 md:pt-12 rounded-3xl overflow-hidden bg-zinc-900'>
          <a href="https://ezylube.in/">
          <img src={Image3}></img>
          </a>

        </div>
      </div>

      <div className='-mt-[4vh]'>
        <h1 className='md:ml-72 text-xl md:text-2xl ml-[3vh]'>Portfolio</h1>
        <div className=' md:mx-64 h-[30vh] md:h-[500px] pt-8 md:pt-12 bg-zinc-900  rounded-3xl overflow-hidden object-cover'>
        <a href='https://github.com/YadneshTendolkar06/myportfolio'>
          <img src={Image1}></img>
          </a>
        </div>
        </div>

      <div className='-mt-[4vh]'>
      <h1 className='md:ml-72 text-xl md:text-2xl ml-[3vh]'>E-commerce Website</h1>
        <div className=' md:mx-64 h-[30vh] md:h-[500px] pt-6 md:pt-9 rounded-3xl overflow-hidden bg-zinc-900'>
          <img src={Image2}></img>

        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default projects