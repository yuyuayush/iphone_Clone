import React from 'react'
import {appleImg,bagImg,searchImg} from '../utils';
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className='pt-5 px-5 sm:px-10  w-full'>
          <nav className='flex justify-between items-center  '>
            <img className='cursor-pointer ' width={18} height={18} src={appleImg}/>

            <div className=" gap-3 sm:gap-5 text-sm text-gray-100  sm:flex hidden">
              {
                navLists.map((nav,index) => (
                  <div className='cursor-pointer ' key={index}> {nav}
                  </div>
                ))
              } 
            </div>

            <div className="flex gap-2 sm:gap-7 ">
              <img width={18} height={18} src={bagImg} alt="" />
              <img width={18} height={18} src={searchImg} alt="" />
            </div>


          </nav>

    </header>
  )
}

export default Navbar
