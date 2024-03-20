let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songImg = document.getElementById("song-img");


song.onloadedmetadata = function (){
    progress.max = song.duration;
    progress.value = song.currentTime; 
}

let rotationDegree = 0;

function rotateImage() {
    rotationDegree += 10; // Adjust the angle as needed
    songImg.style.transform = `rotate(${rotationDegree}deg)`;
}

setInterval(rotateImage, 10000); // Adjust the interval as needed

//used to play and pause the song and also used to change the icon
function playPause(){
    if(song.paused){
        song.play();
        ctrlIcon.src = "images/pause button.png";
        songImg.classList.add("rotating");
        
    }
    else{
        song.pause();
        ctrlIcon.src = "images/play button.png";
        songImg.classList.remove("rotating");
    }
}

//to contiously get progress on the progress bar
if(song.play()){

    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}



//to set the song from where user clicked on the progress button
progress.oninput = function() {
    song.currentTime = progress.value
}

//to play the and change the icon

progress.onchange = function() {
    song.play();
    ctrlIcon.src = "images/pause button.png"
    songImg.classList.add("rotating");
};