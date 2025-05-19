



import { FavoritePokemons } from "@/pokemons";

export const metadata = {
 title: 'Pokémons Favoritos',
 description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident soluta aliquam enim ipsa deleniti fugiat perferendis! Perferendis quae adipisci vitae ratione vel accusantium nisi exercitationem consectetur odit omnis. Harum, quidem?',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl m-2">Listado Pokémons Favoritos <small className="text-blue-500">Global State</small></h1>
      <FavoritePokemons />
    </div>
  );
}