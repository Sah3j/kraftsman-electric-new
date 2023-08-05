import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <main className='bg-black scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}
