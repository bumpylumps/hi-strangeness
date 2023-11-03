import React from 'react'

import Header from './Header'
import ContactForm from './ContactForm'
import StaticPhotoBanner from './StaticPhotoBanner'
import Footer from './Footer'

const About = () => {
  return (
    <>
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
    </>
  )
}

export default About
