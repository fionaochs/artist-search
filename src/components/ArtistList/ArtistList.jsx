import React from 'react';
import { fetchReleases } from '../../services/request';
import withList from '../HOC/withList';
import ReleaseItem from '../Release/ReleaseItem';
import { useParams } from 'react-router-dom';

const ArtistList = () => {
  const { artist, artistId } = useParams();

  const { releases } = fetchReleases(artistId, artist);
  const Releases = withList(ReleaseItem);

  return (
    <>
      <h1>{artist}</h1>
      <Releases list={releases} />
    </>
  );
};
export default ArtistList;
