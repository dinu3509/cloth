import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <section>
        <div className="text-white">
            <ul className='text-white flex gap-5'>
                {['MEN','WOMEN','KIDS',''].map((item)=>(
                     <NavLink to={`/`+item.toLowerCase()} className={`flex flex-col gap-1 items-center`} key={item}>
                        <p>{item}</p>
                        <hr className='w-3/4 hidden'/>
                        </NavLink>

                ))}
            </ul>
        </div>
    </section>
  )
}

export default Navbar
