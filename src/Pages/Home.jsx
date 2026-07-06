import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Buttons from '../Components/Buttons'
import OurCollection from '../Components/OurCollection'
import OurStory from '../Components/OurStory'
import Footer from '../Components/Footer'
import Hr from '../Components/Hr'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <main className='pt-15 md:pt-15 '> <Hero />
      <Buttons />
      <Hr />
      <OurCollection />
      <Hr/>
     < Newsletter />
      <OurStory />  
    </main>
     
    </div>
  )
}

export default Home