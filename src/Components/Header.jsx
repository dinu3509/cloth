import React from 'react'
import { logo } from '../assets'
import Navbar from './Navbar'
const Header = () => {
  return (
    <section id='header'>
            <div className="h-20 flex mx-auto bg-black container justify-between items-center px-4 ">
                <div className="logo text-white font-extrabold text-2xl">
                       <a href="/">FABWEAR</a>
                </div>

                <div className="navbar
                ">
                    <Navbar></Navbar>
                </div>
            </div>
    </section>
  )
}

export default Header
