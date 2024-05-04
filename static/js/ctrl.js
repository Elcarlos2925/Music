let progress = document.getElementById("progress-song");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrl-id");
let currentTimeDisplay = document.getElementById("current-time");
let totalTimeDisplay = document.getElementById("total-time");
let interval;

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
    totalTimeDisplay.textContent = formatTime(song.duration);
}
function playPause() {
    if (ctrl.classList.contains("fa-pause")) {
        song.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
        clearInterval(interval);
    } else {
        song.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
        interval = setInterval(() => {
            progress.value = song.currentTime;
            currentTimeDisplay.textContent = formatTime(song.currentTime);
        }, 500);
    }
}

function playInterval() {
    song.play();
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
    interval = setInterval(() => {
        progress.value = song.currentTime;
        currentTimeDisplay.textContent = formatTime(song.currentTime);
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    return minutes + ":" + secs;
}

song.addEventListener("ended", function(){
    forward()
})