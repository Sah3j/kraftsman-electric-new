'use client'

import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import Image4 from '../public/image4.jpg'
import {CSSTransition} from 'react-transition-group'
import './Hero.css'

function Hero() {
  
  const services = [
    'wiring to lighting',
    'inspection to installation',
    'repairs to maintenance',
  ];

  const gradients = [
    'from-purple-500 to-pink-500',
    'from-orange-500 to-yellow-500',
    'from-blue-500 to-cyan-500',
  ]

  //to control the services animation
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentService, setCurrentService] = useState(services[currentServiceIndex]);

  const [currentGradient, setCurrentGradient] = useState(gradients[currentServiceIndex])
  const [isEnter, setIsEnter] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnter(false);
      setTimeout(() => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 2000)
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsEnter(true);
    setCurrentService(services[currentServiceIndex]);
    setCurrentGradient(gradients[currentServiceIndex]);
  }, [currentServiceIndex]);

  return (
    <section className='w-full bg-black text-white pb-8'>
      <div className='flex max-sm:flex-col max-sm:ml-4 max-sm:mt-4 max-md:flex-col max-md:ml-4 max-md:mt-4 max-lg:mt-12 justify-center mt-24'>
        <div className='w-96 h-96 p-2 max-sm:w-80 max-sm:h-80 max-md:w-80 max-md:h-80 max-lg:w-72 max-lg:h-72 relative'>
          <CSSTransition in={isEnter} timeout={1000} classNames="myclass">
            <div className={`w-96 h-96 max-sm:w-80 max-sm:h-80 max-md:w-80 max-md:h-80 max-lg:w-72 max-lg:h-72 absolute top-0 left-0 bg-gradient-to-r ${currentGradient} rounded`} />
          </CSSTransition>
          <Image
            src={Image4}
            alt="main image"
            fill
            className='object-cover rounded-lg p-px'
          />
        </div>
        <div className='ml-8 max-sm:ml-0 max-sm:max-w-sm max-md:ml-0 max-md:max-w-md max-lg:max-w-md max-xl:max-w-xl max-2xl:max-w-xl 2xl:max-w-xl'>
          <h1 className='text-5xl font-bold leading-normal max-sm:text-3xl max-sm:mt-4 max-md:mt-4 max-lg:text-4xl'>Powering up your home <br></br>with <span className='underline decoration-blue-500'>expertise</span> and <span className='underline decoration-blue-500'>care</span>.</h1>
          <h2 className={`text-3xl max-sm:text-xl max-lg:text-2xl mt-4 leading-10 `}>From  
            <CSSTransition in={isEnter} timeout={1000} classNames="myclass">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentGradient}`}> {currentService}</span>
            </CSSTransition> <br></br>
            we provide high-qualiy electrical services all over British Columbia.
          </h2>
          <div className={`mt-4 rounded p-px inline-block relative overflow-hidden`}>
            <CSSTransition in={isEnter} timeout={1000} classNames="myclass">
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${currentGradient} rounded`} />
            </CSSTransition>
            <a href='#contact' role="button" className='block text-center cursor-pointer text-white bg-black rounded px-4 py-2 bg-gray-900 hover:bg-gray-800' style={{ position: "relative", zIndex: 1 }}>
              Get a Free Quote Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero