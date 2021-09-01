import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import './Pokedex.css'

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <section id='container'>
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    )
  }
}

export default Pokedex;
