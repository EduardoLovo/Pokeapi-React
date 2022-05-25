import React from 'react';
import './Navbar.css';

export const Navbar = () => {

    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
        <nav>
            <div>
                <img className='navbar-img' src={logoImg} alt='logo' />
            </div>
        </nav>
    )
}
