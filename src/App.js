import './App.css';
import NavBar from './components/navbar/NavBar';
import Itemcontainer from './components/navbar/ItemContainer/ItemContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>PokE-Commerce</h1>
      <Itemcontainer section="Pokemones Tier S"/>
      <Itemcontainer section="Pokemones Tier A"/>
      <Itemcontainer section="Pokemones Tier B"/>
    </div>
  );
}

export default App;
