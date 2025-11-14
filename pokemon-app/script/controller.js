function catchPokemon() {
  player.pokemon.push(randomPokemon);
  caughtPokemonView();
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}

updateView();
