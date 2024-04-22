


module.exports = {
 getEpisodes: async (req,res) => {
    const fetch = require('node-fetch')

     //Getting episodes from buzzsprout db
     let originalFresh = new Date().toGMTString();
     let tag = 'W/"23823c33da2c67e553b1334596171947"'
     let episodeParams = {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${process.env.buzzSproutToken}`,
             'If-None-Match': `${tag}`,
             'If-Modified-Since': `${originalFresh}`
         }
     }


     //load page
     try {
         const response = await fetch(`${process.env.buzzSproutURL}`, episodeParams)
         const data = await response.json()
 
         let fresh = response.headers.get('Last-Modified')
         let ETag = response.headers.get('ETag')
         
         if(fresh !== originalFresh){
             originalFresh = fresh 
         } 
         
         if(ETag !== tag){
             tag = ETag
         }



         const episodes = data.map((episode) => {
            return {
                title: episode.title,
                duration: episode.duration,
                source: episode.audio_url
            }
        });



     
         function hourMinEpTime(data){
             data.forEach(episodes => {
                 lengthHour = Math.floor(episodes.duration / 3600)  
                 lengthMinutes = Math.floor(episodes.duration / 60)
                 lengthSeconds = Math.floor(episodes.duration - lengthMinutes * 60)
                 
                 if(lengthSeconds < 10){
                     lengthSeconds = "0" + lengthSeconds
                 } 
                 if(lengthMinutes < 10){
                     lengthMinutes = "0" + lengthMinutes
                 }
                 
                 
                 if(lengthHour < 1){
                     episodes.duration = lengthMinutes + ":" + lengthSeconds 
                 } else if(lengthMinutes > 60){
                     lengthMinutes = lengthMinutes - 60
                     if(lengthMinutes < 10){
                         lengthMinutes = "0" + lengthMinutes
                     }
                     episodes.duration = lengthHour + ":" + lengthMinutes + ":" + lengthSeconds 
                 } else {
                 episodes.duration = lengthHour + ":" + lengthMinutes + ":" + lengthSeconds 
                 }
             })
         }

         res.json(episodes);
         //hourMinEpTime(data)
     
         
     } catch(err) {
         if(err) {
             console.log(`I\'m borked. Error: ${err}`)
             return res.status(500).send(err)
         }
     }
    
 }   
}