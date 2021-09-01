import React from 'react';
import './Pokemon.css'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;

    return (
      <section className='pokemon'>
        <section className='infos'>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </section>
        <img src={ image } alt={ `Pokemon ${name}` } />
        
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;