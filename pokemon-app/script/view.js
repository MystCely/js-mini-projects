function updateView() {
  getRandomPokemon();
  let html = /*html*/ `
    <h1>Pokemon</h1>
    <div class="container">
        <div class="opposing-pokemon">
            <div>${randomPokemon.name}</div>
            <div>${randomPokemon.level}</div>
            <img src="${randomPokemon.image}">
        </div>

        <div class="bottom-screen">
            <div class="player">
                <img src="${player.image}">
                <div>${player.name}</div>
            </div>
        

            <div class="btn-container">
                <button onclick="catchPokemon()">Catch</button>
                <button onclick="updateView()">Find another one</button>
                <button onclick="showPokemon()">Show your pokemons</button>
            </div>

        </div>
    </div>
    `;
  app.innerHTML = html;
}

function caughtPokemonView() {
  app.innerHTML = /*html*/ `
    <div class="caught-container">
        <h1>You caught ${player.pokemon[player.pokemon.length - 1].name}</h1>
        <div class="btn-container">
            <button onclick="updateView()">Find another one</button>
            <button onclick="showPokemon()">Show your pokemon</button>
        </div>
    </div>
    `;
}

function showPokemon() {
  let pokemonString = player.pokemon.map((pokemon) => `<br>${pokemon.name} (Lvl: ${pokemon.level})`);
  console.log(pokemonString);
  app.innerHTML = /*html*/ `
  <div class="pokemons-container">
    <h1 class="my-pokemons">My Pokemons</h1>
    <p>${pokemonString}</p>
  </div>
  `;
}
