import React from 'react'
import { LiaStarSolid } from 'react-icons/lia'
import { FaGoogle } from 'react-icons/fa'

function Testimonials() {

  const testimonials = {
    testimonial1: {id: 1, name: 'Rajvir Sidhu', stars: '5', link:'https://g.co/kgs/TS7CMR', review: 'From the initial contact to the end of the job, these guys are extremely friendly, patient, and provide great advice. I would highly recommend Kraftsman Electric! They provide high quality work, and are very efficient. Professional service that is unmatched by any other company out there. These guys will be my go to electric company for any issues from now on! Thanks again for all your help guys!'},
    testimonial2: {id: 2, name: 'Manny N', stars: '5', link:'https://g.co/kgs/Qn6mtP', review: 'Did a fantastic job on every essential repair/fixture a house needed! Overall the final product turned out amazing and we highly recommend going with Kraftsman Electric for all your electrical needs.'}
  }

  return (
    <section id='testimonial'>
      <div className='md:max-w-4xl md:mx-auto lg:max-w-6xl'>
        <div className='flex items-center ml-4 md:ml-0'>
          <h2 className='font-bold text-sm text-gray-500 md:mx-auto md:pb-8 pt-8'>WHAT OUR CLIENTS ARE SAYING ABOUT US...</h2>
        </div>
        <div className='md:grid md:grid-cols-2 md:ml-8 ml-2'>
          {Object.entries(testimonials).map(([testimonialName, testimonialData]) => (
            <div key={testimonialData.id} className='rounded-lg px-2 py-4 max-w-lg'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='font-medium text-white'>{testimonialData.name}</h3>
                  <div className='flex text-orange-500'>
                    <LiaStarSolid/>
                    <LiaStarSolid/>
                    <LiaStarSolid/>
                    <LiaStarSolid/>
                    <LiaStarSolid/>
                  </div>
                </div>
                <a href={testimonialData.link} target="_blank">
                  <FaGoogle className='mr-8 text-gray-500 hover:text-blue-500 cursor-pointer'/>
                </a>
              </div>
              <p className='mt-3 text-gray-500 text-sm lg:text-base'>
                {testimonialData.review}
              </p>
            </div> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials