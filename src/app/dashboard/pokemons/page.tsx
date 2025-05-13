


import {
  PokemonGrid,
  PokemonsResponse,
  SimplePokemon
} from "@/pokemons";


const getPokemons = async (limit: number = 151, offset: number = 0): Promise<SimplePokemon[]> => {

  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${ limit }&offset=${ offset }`)
    .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  // throw new Error("Eso es un error que no debería suceder")

  return pokemons
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(649, 0)

  return (

    <div className="flex flex-col">
      <h1 className="text-5xl underline m-2">Listado Pokémons <small>Estático</small></h1>
      <PokemonGrid pokemons={ pokemons } />
    </div>
  );
}