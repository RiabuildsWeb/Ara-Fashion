import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutStory from '../Components/AboutStory'
import OurTeam from '../Components/OurTeam'

const About = () => {
  return (
    <div>
      <main className='pt-15 md:pt-15'>
  <AboutHero/>
  <AboutStory />
  <OurTeam />
      </main>
  
    </div>
  )
}

export default About