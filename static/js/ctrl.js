let progress = document.getElementById("progress-song")
let song = document.getElementById("song")
let ctrl = document.getElementById("ctrl-id")
song.onloadedmetadata = function(){
    progress.max = song.duration
    progress.value = song.currentTime
}

function playPause(){
    if(ctrl.classList.contains("fa-pause")){
        song.pause()
        ctrl.classList.remove("fa-pause")
        ctrl.classList.add("fa-play")
        interval = setInterval(() => {
            progress.value = song.currentTime;
        }, 500);
    } else{
        song.play()
        ctrl.classList.add("fa-pause")
        ctrl.classList.remove("fa-play")
    }
}

function playInterval(){
    song.play()
    ctrl.classList.add("fa-pause")
    ctrl.classList.remove("fa-play")
}

progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
}