import React from 'react'

import Header from '../components/Header'
import PodcastPlayer from '../components/PodcastPlayer'
import Footer from '../components/Footer'


import portrait from '../images/armchair-portrait.JPG'


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
            <p className='heroParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae nunc ut erat consectetur maximus. Nulla non arcu sit amet augue tristique ullamcorper. Donec ornare urna eget eleifend varius. Duis aliquet, tortor sed mattis feugiat, nisl dolor finibus dolor, id imperdiet elit nisi vitae diam. Integer libero velit, commodo sed metus non, feugiat porttitor mauris. Sed rutrum accumsan dignissim. In quis felis mattis, mollis nisi in, vestibulum nisl. In nunc purus, luctus ut purus quis, euismod convallis augue. Phasellus nec pellentesque neque.

Phasellus dapibus arcu quis dolor hendrerit, sit amet congue enim vulputate. Ut eu purus et quam lobortis vestibulum et ac urna. Nunc arcu arcu, maximus id ornare eget, iaculis at augue. Fusce rhoncus tortor vel pellentesque bibendum. Morbi ut condimentum ex, eu sodales dolor. Cras venenatis enim dui, sit amet pellentesque ante pharetra nec. Ut maximus, velit at varius accumsan, orci arcu facilisis arcu, at sagittis quam ligula sed ligula. Nulla eleifend, orci a mattis placerat, massa eros ultricies purus, eget egestas ex augue at purus. In eu auctor felis, ac venenatis diam. Nulla euismod, velit eu commodo lacinia, tellus nunc iaculis leo, sed cursus turpis nunc id lectus. Curabitur a vulputate elit, non pulvinar lorem. Sed suscipit nisl eget velit porta, vel tempor sapien maximus. In ut augue nec erat dignissim varius ac sed justo. Phasellus sit amet tortor lobortis, commodo ipsum sit amet, pretium felis.

Morbi felis velit, aliquam vitae odio at, semper tristique nunc. Fusce non ornare quam. Morbi finibus, libero sit amet feugiat viverra, nibh libero interdum enim, ut pretium magna dolor vitae sapien. Ut maximus, augue ut pulvinar lobortis, dolor dui pharetra tellus, vitae ornare orci ante in ipsum. Curabitur eget odio sit amet ante efficitur molestie. Sed interdum nulla ac nisi eleifend, vitae ultrices quam congue. Nulla bibendum malesuada lobortis. Aliquam nec dignissim leo. Sed egestas nisl sed magna tristique, a vulputate urna semper.

Proin ultricies dui at ultrices porta. Vestibulum eu risus efficitur, rhoncus magna id, volutpat magna. Nulla sit amet sodales enim. Nulla eu consectetur lacus, ac gravida eros. Vestibulum ex nulla, maximus quis erat a, vehicula molestie tortor. Vivamus semper, neque quis blandit congue, nibh ex semper metus, at fermentum odio lacus eget massa. Etiam in fermentum enim, ut facilisis mauris. Nulla feugiat, tellus ut ultricies facilisis, mauris turpis tristique nulla, ut malesuada massa quam et orci. In porttitor ac elit ut pharetra.

Aliquam eget condimentum nibh, id dictum ligula. Nunc ornare tellus in suscipit volutpat. Integer ut ligula eget risus consequat aliquam. Integer pharetra vitae nibh vitae consequat. Mauris est risus, malesuada sed varius nec, tristique finibus augue. Fusce vehicula accumsan est at viverra. Duis tempus semper erat. Vivamus ut metus scelerisque urna tempus blandit. Duis aliquet magna nec felis convallis, ut dapibus lacus maximus. Nulla sit amet metus et nisl rhoncus venenatis.</p>
        </section>
      <br />
      <PodcastPlayer />

      <Footer />
    </div>
  )
}

export default Home
