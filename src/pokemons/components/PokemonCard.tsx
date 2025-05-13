



import Link from "next/link"
import Image from "next/image"

import { SimplePokemon } from "../interface/simple-pokemon"
import { IoHeartOutline } from "react-icons/io5"

interface PokemonCardProps {
    pokemon: SimplePokemon
}


export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    const { id, name } = pokemon

    return (
        <div className="w-full mx-auto right-0 mt-2">
            <div className="bg-white rounded overflow-hidden shadow-lg">
                <div className="text-center p-6 bg-gray-800 border-b">
                    <p className="text-sm text-gray-100"># { id }</p>
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                        width={ 100 }
                        height={ 100 }
                        alt={ name }
                        title={ name }
                        priority= { false }
                        className="mx-auto mt-2" />
                    <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ name }</p>
                    <div className="mt-5">
                        <Link href={`/dashboard/pokemon/${ id }`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                            Más información
                        </Link>
                    </div>
                </div>
                <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">
                    <div className="text-red-600">
                        <IoHeartOutline size={ 20 } />
                    </div>
                    <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">No es favorito</p>
                        <p className="text-xs text-gray-500">View your campaigns</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
