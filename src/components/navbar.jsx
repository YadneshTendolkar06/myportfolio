import { useState } from 'react'
import navData from '../constants/navData'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import logo from '../assets/personal-img.jpg'

function Navbar(){

    const [isopen,setIsOpen] = useState(false);

    const toogleButton = () => {
        setIsOpen(!isopen);
    }

    return (
        <>
        <div className="fixed bg-black z-[999] w-full flex justify-between px-5 md:px-10 md:pt-8 pt-6 pb-6 md:pb-0 md:py-6 h-20 font-semibold">
            <div className='flex gap-3'>
            <img src={logo} className='rounded-full w-10 h-10 md:w-10' alt="" />
            </div>
        <div className='hidden md:flex gap-8'>
            {
        navData.map(val=>
            <div key={val.id} className="flex text-lg text-zinc-200">

            <a href={val.id}>{val.name}</a>
            </div>
                )
            }
            </div>

            <div className='text-4xl text-white md:hidden'>
                <button onClick={toogleButton}>{ isopen ? <ImCross /> : <GiHamburgerMenu />}</button>
            </div>
        </div>
        {
            isopen && (
                <div className='bg-white mt-20 w-full fixed z-[999] flex basis-full flex-col items-center'>
                    {
        navData.map(val=>
            <div key={val.id} className="pt-5 flex font-semibold text-2xl text-zinc-600">

            <a href={val.id}>{val.name}</a>
            </div>
                )
            }
                </div>

            )
        }
        </>
    )
}

export default Navbar