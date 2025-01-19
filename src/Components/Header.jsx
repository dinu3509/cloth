import React, { useState } from 'react'
import { logo } from '../assets'
import { NavLink,Link } from 'react-router-dom'
import Navbar from './Navbar'
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <section id='header '>
            <div className={`${show?'fixed sm:static':''}  h-20 flex mx-auto bg-black container justify-between items-center px-4 `}>
                <div className="logo text-white font-extrabold text-2xl flex items-center">
                       <a href="/">FABWEAR</a>
                </div>

                <div className="navbar
                sm:flex hidden">
                    <Navbar></Navbar>
                </div>

                <div className="text-white flex gap-5">
                <span class="material-symbols-rounded cursor-pointer flex items-center">search</span>
                <div className="group relative flex items-center">
                <span class="material-symbols-rounded cursor-pointer">person</span>
                <div className="group-hover:block hidden absolute dropmenu right-0 pt-4 top-6">
                  <div className="flex flex-col gap-2 w-28 py-3 px-5 bg-slate-200 text-gray-500 rounded">
                    <p className='hover:text-black cursor-pointer'>Profile</p>
                    <p className='hover:text-black cursor-pointer'>Orders</p>
                    <p className='hover:text-black cursor-pointer'>Logout</p>
                  </div>                 
                    </div>                               
                </div>
                <div className="flex ">
                  <Link to='/' className='relative flex items-center'>
                  <p className='absolute w-4 h-4 bg-black rounded-full bottom-0 right-0 text-center aspect-square leading-4 text-[12px]'>10</p> 
                  <span class="material-symbols-rounded ">shopping_bag</span></Link>
               
                </div>
                <button className="sm:hidden flex items-center" onClick={handleShow}>
                {show ? (
  <span className="material-symbols-rounded">close</span>
) : (
  <span className="material-symbols-rounded">menu</span>
)}

                <div className={`${show?'mm':''} fixed  bg-black overflow-hidden h-5/6 mt-[80px] w-3/6 -left-full text-3xl  p-2 transition-all duration-500 ease-in-out top-0 `}>
                  <Navbar></Navbar>
                </div>
              
                </button>
               
                </div>
            </div>
    </section>
  )
}

export default Header
