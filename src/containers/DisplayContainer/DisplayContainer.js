import React, { useState } from 'react';
import { fetchArtists, fetchReleases } from '../../services/request';
// import { useParams } from 'react-router-dom';
import SearchDisplay from '../../components/SearchDisplay/SearchDisplay';
import ArtistList from '../../components/ArtistList/ArtistList';

const DisplayContainer = () => {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  // const [releases, setReleases] = useState([]);
  // const params = useParams();

  const handleChange = ({ target }) => setName(target.value);

  const handleClick = () => {
    fetchArtists(name)
      .then(artists => {
        setArtists(artists);
      });
  };
  // fetchReleases(params.id)
  //   .then(releases => {
  //     setReleases(releases);
  //   });

  return (
    <>
      <SearchDisplay text={name} onChange={handleChange} onClick={handleClick}/>
      <ArtistList artists={artists} />
    </>
  );
};

export default DisplayContainer;
