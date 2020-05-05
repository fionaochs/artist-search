import React from 'react';
import { 
  Route, 
  Switch,
  BrowserRouter as Router, 
} from 'react-router-dom';
import ArtistList from '../ArtistList/ArtistList';
import DisplayContainer from '../../DisplayContainer/DisplayContainer';
import Release from '../Release/Release';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DisplayContainer} />  
        <Route exact path="/artists/:artistId" component={ArtistList} />
        {/* <Route exact path="/lyrics/:artist/:title" component={Lyric} /> */}
        <Route exact path="/releases/:artist/:releaseTitle/:releaseId" component={Release} />
      </Switch>
    </Router>
  );
}

