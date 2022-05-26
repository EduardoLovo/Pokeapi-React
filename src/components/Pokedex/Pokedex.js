import React from 'react';
import { Pokemon } from '../Pokemon/Pokemon';
// import { Pokemon } from '../Pokemon/Pokemon';
import './Pokedex.css'

export const Pokedex = (props) => {
    const { pokemons, loading } = props;

    return (
        <div>
            <div className='pokedex-header'>
                <h1>Pokedex</h1>
                <div>Paginação:</div>
            </div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className='pokedex-grid'>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <div>
                                <Pokemon key={index} pokemon={pokemon} />
                            </div>
                        );
                    })}
                </div>
            )
            }
        </div>
    )
}
