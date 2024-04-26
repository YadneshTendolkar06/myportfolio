import React, {useState} from 'react'
import Mylogo from '../assets/personal-img.jpg';
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";


function navbar() {
    const [hamburgerContent, sethamburgerContent] = useState(false);

  const navMenu = [
    {
      name: "about",
      id: "#about"
    },
    {
      name: "skills",
      id: "#skills"
    },
    {
      name: "Project",
      id: "#Project"
    },
    {
      name: "Contact",
      id: "#contact"
    }
  ]
  return (
    <>
      <div className='navbar1 fixed z-[999] w-full px-5 md:px-24 pt-8 pb-4 flex gap-2 md:flex justify-between md:justify-between items-center'>

        <motion.div  initial={{ rotate: 180, scale: 1 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
          type: "spring",
          stiffness: 260,
          damping: 20}}
          className= {hamburgerContent ? 'hidden' : 'logo w-12 h-12 rounded-full overflow-hidden'}>
          <img src={Mylogo}></img>
        </motion.div>

        {/* <TiThMenu onClick={()=> {}} className='text-white' /> */}
        <div className= {hamburgerContent ? 'dataOfnav mobileView h-52 w-full mt-[28vh] text-[3vh] px-5 py-3 font-poppins gap-5 flex flex-col rounded-tl-lg rounded-b-lg  text-black bg-[#e3dac9] border border-b-2 border-zinc-400': 'dataOfnav md:flex md:gap-10' } >
          {navMenu.map((item,index) => (

            <a href={item.id} className={`md:text-white md:font-semibold font-poppins capitalize ${index === 3 && "md:ml-[33vw]"}`}>{item.name}</a>

        ))}
        </div>
        <div className='hamburger-menu text-white md:hidden'>
          <a onClick={() => sethamburgerContent(!hamburgerContent)} href='#'>
          <GiHamburgerMenu />

          </a>
        </div>
      </div>

    </>
  )
}

export default navbar