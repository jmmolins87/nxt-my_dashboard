


import {
  PokemonGrid,
  PokemonsResponse,
  SimplePokemon
} from "@/pokemons";

export const metadata = {
  title: 'Pokémons',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta aliquam enim ipsa deleniti fugiat perferendis! Perferendis quae adipisci vitae ratione vel accusantium nisi exercitationem consectetur odit omnis. Harum, quidem?',
}; 

const getPokemons = async (limit: number = 649, offset: number = 0): Promise<SimplePokemon[]> => {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ limit }&offset=${ offset }`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  return pokemons
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(649, 0)

  return (

    <div className="flex flex-col">
      <h1 className="text-5xl m-2">Listado Pokémons <small className="text-blue-500">Estático</small></h1>
      <PokemonGrid pokemons={ pokemons } />
    </div>
  );
}