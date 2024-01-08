import React from 'react'
import Header from '../components/Header'
import PodcastPlayer from '../components/PodcastPlayer'
import Footer from '../components/Footer'


import { Link } from "react-router-dom";
import StaticPhotoBanner from '../components/StaticPhotoBanner'



const Home = () => {
  
  
  return (
    <div className='Home'>
        <Header />      

        <section className='hero'>
            <section>
              <p className='heroParagraph prominent' >Actor and High Strangeness enthusiast 
              <strong> Steve Berg </strong> chats and cheerleads with researchers, investigators, authors, 
              artists, and comedians about all things weird  We're talking UFOs, the paranormal, 
              outsider art, weird belief systems, the occult, and all that good stuff</p>

              <p className='heroParagraph'>Introduction by Eric Edelstein - Produced  by Sandra Mandrell</p>

              <p className='heroParagraph closing'>To get in touch with Steve about appearances, feedback or just to 
              share your own encounters with High Strangeness:  
              <Link to="mailto: hi.strangeness27@gmail.com"
                className='emailLink'> hi.strangeness27@gmail.com</Link></p>
            </section>
        </section>

      <StaticPhotoBanner />
      <PodcastPlayer />

      <Footer />
    </div>
  )
}

export default Home
