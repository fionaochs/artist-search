import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Detail from '../Detail/Detail';

const ArtistList = ({ artists }) => {
  const artistsList = artists.map(artist => 
    
    <>
      <Link key={artist.id} to={`artists/${artist.id}`}>
        <li>
          <Detail {...artist} />
        </li>
      </Link>
    </>
  );

  return (
    <ul>
      {artistsList}
    </ul>
  );
};


ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  })).isRequired
};

export default ArtistList;
