import React from 'react';
import PropTypes from 'prop-types';

export const RenderCharacter = ({ data }) => {
  return (
    <div className="Character_Card">
      <h1>{data.name}</h1>
      <p>{data.species}</p>
      <img src={data.image} alt={data.name} className=""></img>
    </div>
  );
};

RenderCharacter.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string,
  })
}
