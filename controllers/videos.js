module.exports = {
    getVideos: async (req,res) => {
        try {
            res.render('videos.ejs')
        } catch(err) {
            if(err) {
                console.log(`I\'m borked. Error: ${err}`)
                return res.status(500).send(err)
            }
        }
    }
}; 