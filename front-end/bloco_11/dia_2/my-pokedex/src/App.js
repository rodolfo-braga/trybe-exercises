import './App.css';
import Pokedex from './components/pokedex/Pokedex';
import data from './data';


function App() {
  return (
    <main>
      <h1>Pokedex</h1>
      <Pokedex pokemons={data} />
    </main>
  );
}

export default App;
