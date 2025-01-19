import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <section>
        <div className="">
            <ul className='flex sm:flex-row flex-col text-white gap-2 sm:gap-5'>
                {['MEN','WOMEN','KIDS',''].map((item)=>(
                     <NavLink to={`/`+item.toLowerCase()} className={`h flex flex-col justify-between items-start sm:items-center w-fit relative `} key={item}>
                        <p>{item}</p>
                        <hr className='w-full bottom-0 bg-white h-[2px] absolute hidden '/>
                        </NavLink>

                ))}
            </ul>
        </div>
    </section>
  )
}

export default Navbar
