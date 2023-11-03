import React from 'react'

import Header from './Header'
import PodcastPlayer from './PodcastPlayer'
import Footer from './Footer'


const Home = () => {
  return (
    <>
        <Header />
        <h1>Home Page</h1>
        <section>
            <img src="" alt="armchair photo" />
            <p>Lorem ipsum...</p>
        </section>
      <br />
      <PodcastPlayer />

      <Footer />
    </>
  )
}

export default Home
