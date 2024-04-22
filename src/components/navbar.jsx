import React from 'react'
import Mylogo from '../assets/personal-img.jpg';
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";


function navbar() {
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
      <div className='fixed z-[999] w-full px-10 md:px-24 pt-8 pb-4 md:flex md:justify-between items-center'>

        <motion.div initial={{ rotate: 180, scale: 1 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
          type: "spring",
          stiffness: 260,
          damping: 20}}
          className='logo w-12 h-12 rounded-full overflow-hidden'>
          <img src={Mylogo}></img>
        </motion.div>

        {/* <TiThMenu onClick={()=> {}} className='text-white' /> */}
        <div className='flex gap-10'>
          {navMenu.map((item,index) => (

            <a href={item.id} className={`text-white font-semibold font-poppins capitalize ${index === 3 && "md:ml-[33vw]"}`}>{item.name}</a>

        ))}
        </div>
      </div>

    </>
  )
}

export default navbar