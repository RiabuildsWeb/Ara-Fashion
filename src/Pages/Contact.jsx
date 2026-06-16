import React from 'react'
import ContactHero from '../Components/ContactHero'
import ContactSection from '../Components/ContactSection'
import Newsletter from '../Components/Newsletter'
import CTA from '../Components/CTA'

const Contact = () => {
  return (
    <div>
      <main className='pt-15 md:pt-15'>
      <ContactHero/>
    <ContactSection/>
    <Newsletter />
    <CTA/>
    </main> 
     </div>
  )
}

export default Contact