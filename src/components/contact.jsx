import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";


function contact({data1}) {
  const contactLinks = [
    {
        logo: <FaInstagramSquare />,
        socialLink: 'https://www.instagram.com/yadneshtendolkar?igsh=cHFxMTIxcW02dXhl'
    },
    {
        logo: <AiFillLinkedin />,
        socialLink: 'https://www.linkedin.com/in/yadnesh-tendolkar/'
    },
    {
        logo: <BiLogoGmail />,
        socialLink: 'mailto: yadneshtendolkar.06@gmail.com'
    }
]

  return (
    <>
        <div id='contact' className='w-full h-[20vh] rounded-t-3xl bg-zinc-900'>
        <div className='text-white text-[8vh] flex gap-10 justify-center pt-[2vh] md:pt-[7vh]'>
        {contactLinks.map((item1,idex)=>(
          <a href={item1.socialLink}>
            {item1.logo}
            </a>
        ))}
        </div>

        <div className='font-poppin text-[2vh] text-zinc-400 flex flex-col md:flex-row md:gap-10 items-center md:justify-center pt-2'>
          <h1>Portfolio Design 2024</h1>
          <h1>Website By Yadnesh Tendolkar</h1>
        </div>
        </div>
    </>
  )
}

export default contact