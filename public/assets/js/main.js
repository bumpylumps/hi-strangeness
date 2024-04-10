/* Episode Listener */

let playpause_btn = document.querySelector(".play-pause-episode");
let episodeList = document.querySelector(".episode-list").addEventListener('click', selectEpisode);
let seek_slider = document.querySelector(".episode-timeline-slider");
let curr_time = document.querySelector(".episode-timeline-current-time");
let total_duration = document.querySelector(".episode-timeline-total-duration");



//Global values
let isPlaying = false; 
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');



function firstTrack(loadTrack) {
	let src = document.querySelector(".episode-list").childNodes[1].childNodes[5].innerHTML;
	loadTrack(src)
	updateTimer = setInterval(seekUpdate, 1000);
	document.querySelector('.episode-name').innerText = document.querySelector(".episode-list").childNodes[1].childNodes[1].innerHTML
	
	document.querySelector('.episode-name').classList += ' episode-name-animated'
	setTimeout(function(){document.querySelector('.episode-name').classList.remove('episode-name-animated');}, 1000)
	setTimeout(function(){document.getElementById('episode-name').style.opacity = 1;}, 500)
}



function loadTrack(src) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();
    // Load a new track
    curr_track.src = src;
    curr_track.load();

    
}

function selectEpisode(event){
	let target = event.target; //target child element
	console.log(target)
	select(target); // select episode to play
}

function select(ep) {
	// Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

	document.getElementById('episode-name').style.opacity = 0;

	let src = ep.parentNode.childNodes[5].innerHTML;
	console.log(src)
	loadTrack(src)
	playTrack()

	// Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

	document.querySelector('.episode-name').textContent = ep.parentNode.childNodes[1].innerText
	document.querySelector('.episode-name').className = 'episode-name'

	document.querySelector('.episode-name').classList += ' episode-name-animated'
	setTimeout(function(){document.querySelector('.episode-name').classList.remove('episode-name-animated');}, 2000)
	setTimeout(function(){document.getElementById('episode-name').style.opacity = 1;}, 2000)
	
}

function playpauseTrack() {
	// Switch between playing and pausing
	// depending on the current state
	if (!isPlaying) playTrack();
	else pauseTrack();
}
	
function playTrack() {
	// Play the loaded track
	curr_track.play();
	isPlaying = true;

	// Replace icon with the pause icon
	playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
	
function pauseTrack() {
    // Pause the loaded track
    curr_track.pause();
    isPlaying = false;
    
    // Replace icon with the play icon
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

    // Function to reset all values to their default
function resetValues() {
	curr_time.textContent = "00:00";
	seek_slider.value = 0;
}


function seekTo() {
    // Calculate the seek position by the
    // percentage of the seek slider
    // and get the relative duration to the track
    seekto = curr_track.duration * (seek_slider.value / 100);
    
    // Set the current track position to the calculated seek position
    curr_track.currentTime = seekto;
}


    

    
function seekUpdate() {
    let seekPosition = 0;
    
    // Check if the current track duration is a legible number
    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;
    
        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
		let currentHours = Math.floor(curr_track.currentTime / 3600);
		let durationHours = Math.floor(curr_track.duration / 3600);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
		//check if current hour is greater than 0, update minutes
		if(currentHours > 0){ currentMinutes = currentMinutes - 60 }

		if(durationHours > 0){ durationMinutes = durationMinutes - 60 }


        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

		
    
        // Display the updated duration
		if(currentHours > 0){
			curr_time.textContent = currentHours + ":" + currentMinutes + ":" + currentSeconds;
		} else {
			curr_time.textContent = currentMinutes + ":" + currentSeconds;
		}
        
		if(durationHours > 0){
			total_duration.textContent = durationHours + ":" + durationMinutes + ":" + durationSeconds;
		} else {
			total_duration.textContent = durationMinutes + ":" + durationSeconds;
		}
      
    }
}


firstTrack(loadTrack)
