import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'

function Contact() {

  const contacts = {
    insta: {id:1, icon: <BiLogoInstagram size={20}/>, href: 'https://www.instagram.com/kraftsmanelectric', text: 'kraftsmanelectric', gradient: 'from-purple-500 to-pink-500'},
    phone: {id:2, icon: <BiPhone size={20}/>, href: 'tel:+17788831313', text: '(778) 883-1313', gradient: 'from-orange-500 to-yellow-500'},
    email: {id:3, icon: <HiOutlineMail size={20}/>, href: 'mailto: kelectric17@gmail.com', text: 'kelectric17@gmail.com', gradient: 'from-blue-500 to-cyan-500'},
  }
  return (
    <section id='contact' className='my-8 md:my-16 md:max-w-4xl md:mx-auto lg:max-w-6xl'>
      <div className='flex items-center ml-4 md:ml-0 '>
        <h2 className='font-bold text-lg text-white md:mx-auto md:pb-8 underline decoration-blue-500 decoration-4'>GET IN TOUCH WITH US TODAY</h2>
      </div>
      <div className='mx-4 md:flex md:justify-between text-white'>
        {Object.entries(contacts).map(([contactName, contactData]) => (
          <div key={contactData.id}>
            <div className={`mt-4 rounded p-px inline-block relative overflow-hidden`}>
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r ${contactData.gradient} rounded`} />
              <a href={contactData.href} target='_blank' className='bg-black rounded px-4 py-2 bg-gray-900 flex items-center justify-center w-60 hover:bg-gray-800' style={{ position: "relative", zIndex: 1 }}>
                {contactData.icon}
                <p className='ml-1'>{contactData.text}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact