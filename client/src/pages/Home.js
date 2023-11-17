import React from 'react'

import Header from '../components/Header'
import PodcastPlayer from '../components/PodcastPlayer'
import Footer from '../components/Footer'


import portrait from '../images/armchair-portrait.JPG'
import StaticPhotoBanner from '../components/StaticPhotoBanner'


const Home = () => {
  
  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className='Home'>
        <Header />
        <h1>Home Page</h1>
        <p>{ !data ? "Loading..." : data }</p>
        <section className='hero'>
            <img src={portrait} 
                 alt="steve in chair"
                 className='portrait'  />
            <p className='heroParagraph'>Actor and High Strangeness enthusiast 
            <strong> Steve Berg </strong> chats and cheerleads with researchers, investigators, authors, 
            artists, comedians about all things weird.  We're talking UFOs, the paranormal, 
            outsider art, weird belief systems, the occult and all that good stuff. <br/><br/>

                  Introduction by Eric Edelstein - Produced  by Sandra Mandrell <br/><br/>


-To get in touch with Steve about appearances, feedback or just to share your own encounters with High Strangeness: hi.strangeness27@gmail.com
</p>
        </section>
      <br />

      <StaticPhotoBanner />
      <PodcastPlayer />

      <Footer />
    </div>
  )
}

export default Home
