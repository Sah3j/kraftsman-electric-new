'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { RxHamburgerMenu } from 'react-icons/rx'

function Navbar() {

  const [navHeight, setNavHeight] = useState('h-14')

  function toggleNavbar () {
    if(navHeight === 'h-14') {
      setNavHeight('h-70')
    }
    else {
      setNavHeight('h-14')
    }
  }

  return (
    <div className={`md:flex md:items-center md:justify-between mx-4 my-4 md:max-w-4xl md:mx-auto lg:max-w-6xl px-4 bg-neutral-900 rounded-lg border border-zinc-800
      ${navHeight} overflow-hidden relative transition-height duration-1000 ease-in-out`}>
      <div className='flex justify-between items-center'>
        <div className='flex items-center my-2'>
          <Image
            src={Logo}
            alt="Logo"
            width={36}
            className=''
          />
          <h1 className='text-blue-500 font-bold ml-4 text-white'>Kraftsman Electric</h1>
        </div>
        <RxHamburgerMenu size={24} className='text-gray-500 cursor-pointer hover:text-white md:hidden' onClick={() => toggleNavbar()}/>
      </div>
      <div className='flex flex-col md:flex-row text-gray-500 mt-6 md:mt-0'>
        <a href='#services' className='hover:text-white py-4 border-b border-zinc-800 md:border-b-0'>Services</a>
        <a href='#portfolio' className='md:ml-4 hover:text-white py-4 border-b border-zinc-800 md:border-b-0'>Portfolio</a>
        <a href='#testimonial' className='md:ml-4 hover:text-white py-4 border-b border-zinc-800 md:border-b-0'>Testimonials</a>
        <a href='#contact' className='md:ml-4 hover:text-white py-4'>Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar