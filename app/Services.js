import React from 'react'
import { SiWire } from 'react-icons/si'
import { AiOutlineBulb } from 'react-icons/ai'
import { BiWrench } from 'react-icons/bi'
import { BsPlug } from'react-icons/bs'
import { BsClipboard2Check } from 'react-icons/bs'
import { VscSettingsGear } from 'react-icons/vsc'

function Services() {

  const services = {
    'Wiring': {
      description: 'Expert wiring services for your home or business, including electrical panel upgrades and rewiring of existing systems.',
      logo: <SiWire size={22}/>,
      style: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'
    },
    'Lighting': {
      description: 'We specialize in installing and repairing lighting fixtures, both indoors and outdoors. We also offer energy-efficient lighting solutions.',
      logo: <AiOutlineBulb size={22}/>,
      style: 'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'
    },
    'Inspection': {
      description: 'Thorough electrical inspections to ensure your home or business is safe and up to code.',
      logo: <BsClipboard2Check size={22}/>,
      style: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'
    },
    'Installation': {
      description: 'We install a variety of electrical devices and appliances, including ceiling fans, smoke detectors, and more.',
      logo: <BsPlug size={22}/>,
      style: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500'
    },
    'Repair': {
      description: 'Reliable and affordable repair services for all types of electrical problems, from circuit breakers to wiring issues.',
      logo: <BiWrench size={22}/>,
      style: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    'Maintenance': {
      description: 'Regular maintenance services to keep your electrical system running smoothly and prevent future problems.',
      logo: <VscSettingsGear size={22}/>,
      style: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'
    }
  };

  return (
    <section id='services' className='bg-black text-white md:max-w-4xl md:mx-auto lg:max-w-6xl pt-4 md:pt-8 lg:pt-20'>
      <div className='flex items-center ml-4 md:ml-0 '>
        <h2 className='font-bold text-sm text-gray-500 md:mx-auto md:pb-4'>EXPLORE THE SERVICES WE OFFER</h2>
      </div>
      <div className='md:grid md:grid-cols-2 md:ml-8'>
        {Object.entries(services).map(([serviceName, serviceData]) => (
          <div key={serviceName} className='p-4 m-2 ml-0 max-w-lg first:mt-2 md:first:mt-4'>
            <div className='flex items-center'>
              <div className={`bg-gray-500 p-1 rounded text-gray-200`}>
                {serviceData.logo}
              </div>
              <h3 className={`font-semibold text-base pl-2 md:text-lg ${serviceData.style}`}>
                {serviceName}
              </h3>
            </div>
            <p className='text-sm text-gray-500 mt-2 md:text-base'>
              {serviceData.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  )
}

export default Services