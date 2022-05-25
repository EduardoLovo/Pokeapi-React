import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Pokedex } from './components/Pokedex/Pokedex';
import { Searchbar } from './components/Seachbar/Searchbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Pokedex />
    </div>
  );
}

export default App;
