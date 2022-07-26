import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({name: "", species: "", image: "", 
    hp: "", attack: "", 
    defense: "", specAttack: "", specDefense: "", 
  speed: "", type: ""})
  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({ name: pokemonName, species: response.data.species.name, image: response.data.sprites.front_default, 
        hp: response.data.stats[0].base_stat, attack: response.data.stats[1].base_stat, 
        defense: response.data.stats[2].base_stat, specAttack: response.data.stats[3].base_stat, specDefense: response.data.stats[4].base_stat, 
      speed: response.data.stats[5].base_stat, type: response.data.types[0].type.name});
      setPokemonChosen(true);
    })
  }
  const searchKey = event => {
    if (event.key == 'Enter') {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
        setPokemon({ name: pokemonName, species: response.data.species.name, image: response.data.sprites.front_default, 
          hp: response.data.stats[0].base_stat, attack: response.data.stats[1].base_stat, 
          defense: response.data.stats[2].base_stat, specAttack: response.data.stats[3].base_stat, specDefense: response.data.stats[4].base_stat, 
        speed: response.data.stats[5].base_stat, type: response.data.types[0].type.name});
        setPokemonChosen(true);
    })
  }
}
  return (
    <div className="App">
      <div className = "Title">
    <h1 className = "pokeH1"> PokèSearch!</h1>
    <input type="text" placeholder="Search for a Pokèmon" onChange={(event) => {setPokemonName(event.target.value)}} onKeyDown={searchKey}></input>
    <button onClick={searchPokemon}> Search Pokèmon</button>
      </div>
      <div className="displayPokemon">{!pokemonChosen ? (<h1>Please choose a Pokèmon</h1>) : (
        <>
      <h1>{pokemon.name}</h1>
      <img src = {pokemon.image} />
      <h3>Species: {pokemon.species}</h3>
      <h3>hp: {pokemon.hp}</h3>
      <h4>attack: {pokemon.attack}</h4>
      <h4>defense: {pokemon.defense}</h4>
      <h4>special attack: {pokemon.specAttack}</h4>
      <h4>special defense: {pokemon.specDefense}</h4>
      <h4>speed: {pokemon.speed}</h4>
      <h4>type: {pokemon.type}</h4>
      </>
      )}
      </div>
    </div>
  );
}

export default App;
