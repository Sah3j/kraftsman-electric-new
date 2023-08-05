import React from 'react'
import Image from 'next/image'
import Image1 from '../public/image1.png'
import Image2 from '../public/image2.png'
import Image3 from '../public/image3.png'
import Image4 from '../public/image4.png'
import Image5 from '../public/image5.png'
import Image6 from '../public/image1.jpg'


function Portfolio() {

  const images = {
    Image6: {src: Image6, id: '1', alt: 'Portfolio image 6'},
    Image2: {src: Image2, id: '1', alt: 'Portfolio image 2'},
    Image1: {src: Image1, id: '1', alt: 'Portfolio image 1'},
    Image3: {src: Image3, id: '1', alt: 'Portfolio image 3'},
    Image4: {src: Image4, id: '1', alt: 'Portfolio image 4'},
    Image5: {src: Image5, id: '1', alt: 'Portfolio image 5'},
  }

  return (
    <section id='portfolio'>
      <div className='bg-black grid grid-cols-2 px-2 md:grid-cols-3 py-4 md:py-16 md:max-w-4xl md:mx-auto lg:max-w-6xl'>
        {Object.entries(images).map(([imageName, imageData]) => (
          <div key={imageData.id} className='w-46 h-46 m-1 bg-black'>
          <Image
            src={imageData.src}
            alt={imageData.alt}
            className='object-cover w-full h-full rounded'
          />
          </div> 
        ))}
      </div>
    </section>
  )
}

export default Portfolio