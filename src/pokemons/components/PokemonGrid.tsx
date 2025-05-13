




import { SimplePokemon } from "../interface/simple-pokemon"
import { PokemonCard } from "./PokemonCard"

interface SimplePokemonProps {
    pokemons: SimplePokemon[]
}


export const PokemonGrid = ({ pokemons }: SimplePokemonProps) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 p-5">
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
                ))
            }
        </div>
    )
}
