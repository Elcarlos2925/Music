songListened = []
let random

function forward(){
    do{
        random = Math.floor(Math.random() * 62)
    } while (songListened.includes(random))
    songListened.push(random)
    clearSongListened()
    reload()
    console.log(songListened)
}
function backward() {
    if (songListened.length > 1) {
        songListened.pop();
        reload()
        clearSongListened()
        random = songListened[songListened.length - 1];
    }
}

function clearSongListened(){
    if (songListened.length >= 62){
        songListened = []
    }
}
function reload(){
    fetch('../static/js/songs.json')
  .then(response => response.json())
  .then(songs => {

    // Aquí puedes usar los datos cargados del archivo JSON para actualizar el contenido de tu página.
    document.getElementById("img").innerHTML = `
        <img src='${songs[random].Img}' alt='${songs[random].Title}' class='w-80 rounded-2xl shadow-2xl mb-5 mt-0 ml-0 transition-opacity duration-1000 ease-in-out'>
    `;
    
    document.getElementById("title").innerHTML = `
        <h1 class="text-lg font-black">${songs[random].Title}</h1>
    `;
    
    document.getElementById("artist").innerHTML = `
        <p class="text-xs">${songs[random].Artist}</p>
    `;
    let sourceSong = document.getElementById('song');
    sourceSong.src = songs[random].Url;
    playInterval()
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
}

forward()