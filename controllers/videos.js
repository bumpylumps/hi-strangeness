const fetch = require('node-fetch')

module.exports = {
    getVideos: async (req,res) => {

        try {
            const response = await fetch(`${process.env.YT_URL}`);
            const data = await response.json()
            const videos = data.items
            let ids = []
           let videoObjs = []

           videos.forEach((video) => {
            if(video.id.kind === 'youtube#video'){
                ids.push(video.id.videoId)
            }
           })

           for(let i=0; i < ids.length; i++){
            const response = await fetch(`${process.env.YT_VIDEOS}${ids[i]}`)
            const videos = await response.json()
            const object = videos.items[0]
       
            videoObjs.push(object)
           }
            
            res.render('videos.ejs', { videos: videoObjs})
        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }
    }
}; 