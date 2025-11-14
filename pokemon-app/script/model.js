const app = document.getElementById('app');

let pikachu = {
  name: 'Pikachu',
  health: 45,
  image: 'img/pikachu.png',
  level: 8,
};

let bulbasaur = {
  name: 'Bulbasaur',
  health: 70,
  image: 'img/bulbasaur.png',
  level: 12,
};

let oranguru = {
  name: 'Oranguru',
  health: 170,
  image: 'img/oranguru.png',
  level: 45,
};

let drowzee = {
  name: 'Drowzee',
  health: 90,
  image: 'img/drowzee.png',
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;

let player = {
  name: 'Bjarne',
  image: 'img/pokemonTrainerIdle.png',
  pokemon: [],
};
