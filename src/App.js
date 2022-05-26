import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './Api/Api';
import './App.css';
import { FavoriteProvider } from './components/contexts/favoritesContext';
import { Navbar } from './components/Navbar/Navbar';
import { Pokedex } from './components/Pokedex/Pokedex';
import { Searchbar } from './components/Seachbar/Searchbar';

const favoriteKey = 'f'

function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const [favorites, setFavorites] = useState([])

  const itensPerPage = 25

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log('error:', error);
    }
  }

  // const loadFavoritePokemons = () => {
  //   const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey))
  //   setFavorites(pokemons)
  // }

  // useEffect(() => {
  //   loadFavoritePokemons()
  // }, []);

  useEffect(() => {
    fetchPokemons()
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if (favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1)
    } else {
      updateFavorites.push(name);
    }
    // window.localStorage.setItem(favoriteKey, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites)
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}>
      <div className="App">
        <Navbar />
        <Searchbar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
    </FavoriteProvider>
  );
}

export default App;
