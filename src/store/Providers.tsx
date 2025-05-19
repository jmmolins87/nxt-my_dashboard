

'use client';

import { Provider } from 'react-redux';
import { useEffect } from 'react';

import { setFavoritePokemons } from './pokemons/pokemons'

import { store } from '.';


export function Providers({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        
        const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
        store.dispatch(setFavoritePokemons(favorites))
    }, [])

    return (
        <Provider store={ store }>
            { children }
        </Provider>
    )
}