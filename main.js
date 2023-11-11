function obtenerPersonajes(done) {

  const url = "https://rickandmortyapi.com/api/character";

  const results = fetch(url);
  //  Usar la fetch API para obtener los datos de la API
  results
    .then(response => response.json())
    .then(data => {
      done(data)
    });
}

obtenerPersonajes(data => {
  data.results.forEach(personaje => {
    const article = document.createRange().createContextualFragment(/*mi plantilla html*/`
    <article class="col-4">
    <div class="card mb-5 mt-3" style="width: 18rem;">
      <img src="${personaje.image}" class="card-img-top"
        alt="imagen">
        <div class="card-body">
          <h5 class="card-title">Nombre: ${personaje.name}</h5>
          <p class="card-text">Estatus:${personaje.status}</p>
          <p class="card-text">Especie:${personaje.species}</p>
        </div>
    </div>
    </article> `
    );
    const contenedor = document.querySelector(".row");
    contenedor.append(article);
  });
});
