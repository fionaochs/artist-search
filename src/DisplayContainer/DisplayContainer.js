import React, { useState } from 'react';
import { fetchArtists, fetchReleases } from '../services/request';
// import { useParams } from 'react-router-dom';
import SearchDisplay from '../components/SearchDisplay/SearchDisplay';
// import ArtistList from '../components/ArtistList/ArtistList';

const DisplayContainer = () => {
  const [name, setName] = useState('');

  const handleChange = ({ target }) => setName(target.value);

  const handleClick = () => {
  };
  const artists = fetchArtists(name);

  return (
    <>
      <SearchDisplay text={name} onChange={handleChange} onClick={handleClick}/>
      {/* <ArtistList artists={artists} /> */}
    </>
  );
};

export default DisplayContainer;

