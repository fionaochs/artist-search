import React from 'react';
import PropTypes from 'prop-types';
import { fetchSongs } from '../../services/request';
import withList from '../HOC/withList';
import Song from '../Song/Song';
import { useParams } from 'react-router-dom';

const Release = () => {
  const { releaseTitle, releaseId, artist } = useParams();

  const img = `http://coverartarchive.org/release/${releaseId}/front`;
  const handleImgError = ({ target }) => (target.src = null);
  
  const songsData = fetchSongs(releaseId, artist);
  const Songs = withList(Song);

  return (
    <>
      <h2>{releaseTitle}</h2>
      <img src={img} onError={handleImgError} alt={releaseTitle}/>
      <Songs list={songsData}/>
    </>
  );
};
Release.propTypes = {
  match: PropTypes.object.isRequired
};
export default Release;
