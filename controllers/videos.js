const fetch = require('node-fetch')

module.exports = {
    getVideos: async (req,res) => {

        try {
            const response = await fetch(`${process.env.YT_LIST}`);
           const data = await response.json()
            const videos = data.items
            let ids = []
            let videoObjs = []
            console.log(data.items[0].id)
            /*construct object for videos with: 
            { 
                title: 
                description
                src 
                thumbnail
            }
            

            send this to videoObjs array, return instead of searching and populating with calls
            */
           for (let i=0; i < videos.length; i++) {
            let struct = {
                title: videos[i].snippet.title,
                description: videos[i].snippet.description,
                thumbnail: videos[i].snippet.thumbnails.default.url,
                srcId: `https://www.youtube.com/embed/${videos[i].snippet.resourceId.videoId}` 
            }
                videoObjs.push(struct)
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