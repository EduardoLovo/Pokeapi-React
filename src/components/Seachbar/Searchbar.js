import React, { useState } from 'react';
import { searchPokemon } from '../../Api/Api';
import './Searchbar.css';

export const Searchbar = () => {

    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState('')

    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
        console.log('pokemon', search);
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className='searchbar-container'>
            <div className='searchbar'>
                <input placeholder='Buscar Pokemon' onChange={onChangeHandler} />
            </div>
            <div className='searchbar-btn'>
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt='img' />
                </div>
            ) : null}
        </div>
    )
}
