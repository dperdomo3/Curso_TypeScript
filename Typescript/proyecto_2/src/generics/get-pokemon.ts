import axios from "axios";
import { Pokemon } from '../interfaces/pokemon';

//async transforma mi función a que regrese una promesa
export const getPokemon = async(pokemonId:number) => {
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    console.log(data);
    return data;
}