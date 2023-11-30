import React from 'react'

import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import StaticPhotoBanner from '../components/StaticPhotoBanner'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='About'>
        <Header />

        <StaticPhotoBanner />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default About
