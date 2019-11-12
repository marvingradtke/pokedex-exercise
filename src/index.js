import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput
} from './api/elements';
import { getPokemonsByName, getAllPokemons } from './api/pokemons';

// Query elements
const searchInput = document.querySelector('.search__input');
const resultsElement = document.querySelector('.results');

// Get all pokemons
const allPokemons = getAllPokemons();

// Reset input and results
resetInput(searchInput);
const allPokemonElements = createPokemonElements(allPokemons);
setChild(resultsElement, allPokemonElements);

// Add event listeners
searchInput.addEventListener('input', event => {
  const searchValue = event.target.value;
  const pokemons = getPokemonsByName(searchValue);
  const pokemonElements = createPokemonElements(pokemons);
  if (pokemons.length > 0) {
    setChild(resultsElement, pokemonElements);
  } else {
    setChild(resultsElement, createNoPokemons());
  }
});

/**
 * Later, you can add sort functionality.
 */
