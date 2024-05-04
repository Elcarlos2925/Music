fetch('../static/js/songs.json')
  .then(response => response.json())
  .then(songs => {

    // Aquí puedes usar los datos cargados del archivo JSON para actualizar el contenido de tu página.
    document.getElementById("img").innerHTML = `
        <img src='${songs[23].Img}' alt='${songs[23].Title}' class='img-song'>
    `;
    
    document.getElementById("title").innerHTML = `
        <h1 class='title'>${songs[23].Title}</h1>
    `;
    
    document.getElementById("artist").innerHTML = `
        <p class='artist'>${songs[23].Artist}</p>
    `;

    let sourceSong = document.getElementById('song');
    sourceSong.src = songs[23].Url;
    console.log(sourceSong.src)

   

  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });