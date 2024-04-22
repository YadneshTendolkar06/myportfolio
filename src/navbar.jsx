import React from 'react'
import Mylogo from './assets/personal-img.jpg';
import { motion } from "framer-motion";
import Skills from './skills';
import { Link } from 'react-scroll';

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
      id: "#Contact"
    }
  ]
  return (
    <>
      <div className='fixed z-[999] w-full px-24 pt-8 pb-4 flex justify-between items-center'>
        <div className='logo w-12 h-12 rounded-full overflow-hidden'>
          <img src={Mylogo}></img>
        </div>

        <div className='flex gap-10'>
          {navMenu.map((item,index) => (

            <a href={item.id} className={`text-white font-semibold font-poppins capitalize ${index === 3 && "ml-[33vw]"}`}>{item.name}</a>

        ))}
        </div>
      </div>

    </>
  )
}

export default navbar