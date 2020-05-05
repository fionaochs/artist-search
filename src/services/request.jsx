import { useEffect, useState } from 'react';

export const fetchArtists = (name) => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=20`)
      .then(res => res.json())
      .then(json => {
        const artists = json.artists.map(artist => ({
          artistId: artist.id,
          artistName: artist.name
        }));
        setArtists(artists);
      });
  }, [name]);
  return artists;
};

export const fetchReleases = (artistId) => {
  const [releases, setReleases] = useState([]);
  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
      .then(res => res.json())
      .then(json => {
        const releases = json.releases.map(release => ({
          releaseId: release.id,
          releaseTitle: release.title,
          releaseDate: release.date
        }));
        setReleases(releases);
      });
  }, [artistId]);
  return releases;
};

export const fetchSongs = (releaseId, artist) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
      .then(res => res.json())
      .then(res => res.recordings)
      .then(songs => {
        const mapSongs = songs.map(song => ({ 
          title: song.title, 
          artist: artist, 
          id: song.id }));
        setSongs(mapSongs);
      });
  }, [releaseId]);
  return songs;
};

export const fetchLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState('');
  useEffect(() => {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
      .then(res => res.json())
      .then(lyrics => setLyrics(lyrics.lyrics));
  }, [title]);
  return lyrics;
};
