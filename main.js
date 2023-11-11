// Obtener los personajes de la API
function obtenerPersonajes(callback) {
  const url = "https://rickandmortyapi.com/api/character";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(data);
    });
}

// Crear elementos HTML de los personajes y agregarlos al contenedor
function mostrarPersonajes(data) {
  const contenedor = document.querySelector(".row");

  data.results.forEach(personaje => {
    const article = crearElementoPersonaje(personaje);
    contenedor.append(article);
  });
}

// Crear un elemento HTML para un personaje
function crearElementoPersonaje(personaje) {
  const article = document.createRange().createContextualFragment(/* tu plantilla HTML */`
    <article class="col-4">
      <div class="card mb-5 mt-3" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="imagen">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${personaje.name}</h5>
          <p class="card-text">Estatus: ${personaje.status}</p>
          <p class="card-text">Especie: ${personaje.species}</p>
        </div>
      </div>
    </article>
  `);

  return article;
}

// Llamar a las funciones para obtener los personajes y mostrarlos en la página
obtenerPersonajes(mostrarPersonajes);