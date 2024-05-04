songListened = []
let random

function forward(){
    do{
        random = Math.floor(Math.random() * 39)
    } while (songListened.includes(random))
    songListened.push(random)
    clearSongListened()
    reload()
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
    if (songListened.length >= 39){
        songListened = []
    }
}
function reload(){
    fetch('../static/js/songs.json')
  .then(response => response.json())
  .then(songs => {

    // Aquí puedes usar los datos cargados del archivo JSON para actualizar el contenido de tu página.
    document.getElementById("img").innerHTML = `
        <img src='${songs[random].Img}' alt='${songs[random].Title}' class='img-song'>
    `;
    
    document.getElementById("title").innerHTML = `
        <h1 class='title'>${songs[random].Title}</h1>
    `;
    
    document.getElementById("artist").innerHTML = `
        <p class='artist'>${songs[random].Artist}</p>
    `;

    let sourceSong = document.getElementById('song');
    sourceSong.src = songs[random].Url;
   

  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
}

forward()
reload()