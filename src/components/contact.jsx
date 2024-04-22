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
        <div id='contact' className='w-full flex gap-10 justify-center h-[20vh] bg-zinc-900'>
        <div className='text-white text-[8vh] flex gap-10 justify-center pt-[7vh]'>
        {contactLinks.map((item1,idex)=>(
          <a href={item1.socialLink}>
            {item1.logo}
            </a>
        ))}
        </div>
        </div>
    </>
  )
}

export default contact