import React from 'react'

const PodcastPlayer = () => {
  return (
    <div className='podcast-player'>
      <h2>Podcast Player Space</h2> 
      <div className='episode-player-container'>
       <img className='episode-player-logo' 
          src="https://placekitten.com/500/500" 
          alt="logo" />
        <section className='episode-player-interior'>

{/* player timeline + buttons */}

          <section className='episode-player-block'>
            <div className='episode-details'>
              <div id="episode-name" className='episode-name'>Episode Name</div>
            </div>

            <div className='episode-player'>
           

              <div className='episode-timeline-container'>
                {/* buttons */}
                <div className='episode-player-buttons'>
                  <div className='play-pause-episode'>
                  <input type='image' 
                    alt="play/pause button"
                    src="https://placekitten.com/50/50"
                    />
                </div>
                </div>
                
                {/* timeline */}
                <div className='episode-timeline-current-time'>00:00</div>
                <input className='episode-timeline-slider' 
                  type="range" 
                  min={0} 
                  max={100}
                  value={0}
                  // onChange={seekTo} 
                  />
                <div className='episode-timeline-total-duration'>00:00</div>
              </div>
            </div>
          </section>

          {/* episode list */}
          <div className='episode-list-container'>
            <ul className='episode-list'>
              <li className='episode'>
                <span className='episode-number'>Episode Number</span>
                <span className='episode-title'>Episode Title</span>
                <span className='episode-duration'>Episode Duration</span>
                <span className='episode-audio-source' id="episode-source">Episode Audio Source</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PodcastPlayer
