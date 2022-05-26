import { useEffect, useState } from 'react';
import { getPokemonData, getPokemons } from './Api/Api';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Pokedex } from './components/Pokedex/Pokedex';
import { Searchbar } from './components/Seachbar/Searchbar';

function App() {
  const [loading, setLoading] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results)
      setLoading(false)
    } catch (error) {
      console.log('error:', error);
    }
  }

  useEffect(() => {
    fetchPokemons()
    console.log('carregou');
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
