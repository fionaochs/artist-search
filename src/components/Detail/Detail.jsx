import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
// import { fetchCoverArt } from '../../services/request';


const Detail = ({ artistId, artistName }) =>  (
  // useEffect(() => {
  //   fetchCoverArt(params.id)
  //     .then(res => setCharacter(res));
  // }, []);

  <section>
    <h3>{artistName}</h3>
  </section>
);


Detail.propTypes = {
  artistName: PropTypes.string.isRequired,
};

export default Detail;
