import React from 'react';
import { fetchReleases } from '../../services/request';
import withList from '../HOC/withList';
import ReleaseItem from '../Release/ReleaseItem';
import { useParams } from 'react-router-dom';

const ArtistList = () => {
  const { artist, artistId } = useParams();

  const { releases, pageNum, dec, inc } = fetchReleases(artistId, artist);
  const Releases = withList(ReleaseItem);

  return (
    <>
      <h1>{artist}</h1>
      {/* <button disabled={pageNum === 1} onClick={dec}>Previous Page</button>
      <button disabled={releases.length < 20} onClick={inc}>Next Page</button> */}
      <Releases list={releases} />
    </>
  );
};
export default ArtistList;
