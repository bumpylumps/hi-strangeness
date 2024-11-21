
/* Video Player */ 


// let episodeList = document.querySelector(".episode-list").addEventListener('click', selectEpisode);

let videoList = document.querySelector(".video-list").addEventListener('click', selectVideo);


function selectVideo(event) {
	let target = event.target; //target child element
	select(target); // select episode to play
}


function select(ep){
    // console.log(ep.childNodes[5].innerText);
    document.querySelector('.video_title').textContent = ep.childNodes[3].innerText;
    document.querySelector('.video_description').textContent = ep.childNodes[7].innerText;
    
    /*let tempDiv = document.createElement('div');
    tempDiv.innerHTML = ep.childNodes[5].innerText;
    let iframe = tempDiv.querySelector('iframe');

    if(iframe) {
        let newSrc = iframe.getAttribute('src');

        if(newSrc.startsWith('//')) {
            newSrc = 'https:' + newSrc;        
        } else if (!newSrc.startsWith('http')) {
            newSrc = 'https://' + newSrc;
        }
        console.log(tempDiv.children[0].attributes.src.nodeValue);
        document.getElementById('video_player').src = newSrc;
        console.log(ep) 
    } */
    console.log(ep.childNodes[5].innerText)
    document.getElementById('video_player').src = ep.childNodes[5].innerText;

   
    
}

function loadFirst() {
      const episode = document.querySelector('.video-list').childNodes[1];
      console.log(episode)
     //document.querySelector('.video_title').textContent = videos[0].childNodes[3].innerText;
     //document.querySelector('.video_description').textContent = videos[0].childNodes[7].innerText;
     
     let tempDiv = document.createElement('div');
     //tempDiv.innerHTML = videos[0].childNodes[5].innerText;
     let iframe = tempDiv.querySelector('iframe');

     /*
     if(iframe) {
         let newSrc = iframe.getAttribute('src');
 
         if(newSrc.startsWith('//')) {
             newSrc = 'https:' + newSrc;        
         } else if (!newSrc.startsWith('http')) {
             newSrc = 'https://' + newSrc;
         }
         console.log(tempDiv.children[0].attributes.src.nodeValue);
         document.getElementById('video_player').src = newSrc;
     } 
         */
     
}


loadFirst();