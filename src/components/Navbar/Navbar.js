import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';
import './Navbar.css';

export const Navbar = () => {

    const { favoritePokemons } = useContext(FavoriteContext);

    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>
            <div>
                <img className='navbar-img' src={logoImg} alt='logo' />
            </div>
            <h2>Favoritos❤{favoritePokemons.length}</h2>
        </nav>
    )
}
