import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistDetail = ({ artist, artistId, disambiguation = 'N/A' }) => {
  return (
    <Link to={`/artists/${artistId}`}>
      <h1>{artist}</h1>
      <p>Disambiguation: {disambiguation}</p>
    </Link>
  );
};

ArtistDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default ArtistDetail;
