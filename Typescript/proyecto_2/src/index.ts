import { getPokemon } from "./generics/get-pokemon";

// console.log(getPokemon());
getPokemon(67).then(pokemon => console.log(pokemon.sprites.front_default))
    .catch(error => console.error(error))
    .finally(()=> console.log('fin de get pokemon'))
