import React from 'react'

import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import StaticPhotoBanner from '../components/StaticPhotoBanner'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='About'>
        <Header />
        
        <h1>About Page</h1>
        <img src="" alt="host portrait" />
        <p>Lorem ipsum About the host/show</p>
        <br />
        <StaticPhotoBanner />
        <br/>
        <ContactForm />
        <br />
        <Footer />
    </div>
  )
}

export default About
