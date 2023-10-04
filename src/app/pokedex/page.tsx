'use client';

import React, { useState, useEffect } from 'react';
import Pokecard from './../components/pokecard';

interface Pokemon {
    id: number;
    name: string;
    url: string;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];
}

const Pokedex: React.FC = () => {
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    const getAllPokemons = async (): Promise<void> => {
        let res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        let data = await res.json();

        if ('results' in data) {
            data.results.forEach((pokemon: Pokemon) => {
                getPokemon(pokemon.url);
            });
        }
    };

    const getPokemon = async (url: string): Promise<void> => {
        let res = await fetch(url);
        let pokemon = await res.json();

        setPokemonList(pokemonPrecedent => [...pokemonPrecedent, pokemon]);
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <>
            {pokemonList.length ? (
                <div className="container grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16 p-8 pt-32 mx-auto">
                    {pokemonList.map((pokemon: Pokemon) => (
                        <Pokecard
                            key={pokemon.id} 
                            pokemon={pokemon}
                        />
                    ))}
                </div>
            ) : (
                <p>Loading</p>
            )}
        </>
    );
};

export default Pokedex;
