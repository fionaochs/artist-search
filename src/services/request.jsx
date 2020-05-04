// export const fetchReleases = (releaseId) => {
//   return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
//     .then(res => res.json())
//     .then((json) => ({
//       recordings: json.recordings
//     }));
// };
export const fetchArtists = (name) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=20`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      artistId: artist.id,
      artistName: artist.name
    })));
};
export const fetchReleaseData = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      releaseId: release.id,
      releaseTitle: release.title,
      releaseDate: release.date
    })));
};
export const fetchSongs = (releaseId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings.map(song => ({
      songId: song.id,
      songTitle: song.title,
    })));
};
export const fetchLyrics = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => res.lyrics);
};
export const fetchCoverArt = (releaseId) => {
  return fetch(`http://coverartarchive.org/release/${releaseId}/front`)
    .then(res => res.body);
};
