import React from 'react'

import Header from "../components/Header"
import VideoPlayer from "../components/VideoPlayer"
import Footer from "../components/Footer"

const Videos = () => {
  return (
    <div className='Video'>
      <Header />

      <h1>Videos</h1>

      <VideoPlayer />

      <Footer />
    </div>
  )
}

export default Videos
