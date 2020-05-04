import React from 'react';
import PropTypes from 'prop-types';

const SearchDisplay = ({ onClick, onChange, name }) => (
  <section>
    <input type="text" value={name} name='artist name' placeholder="Search for artist" onChange={onChange}></input>
    <button onClick={onClick}>Search</button>
  </section>
);

SearchDisplay.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default SearchDisplay;
