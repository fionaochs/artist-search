import React from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
// import SearchDisplay from '../SearchDisplay/SearchDisplay';
import DisplayContainer from '../../containers/DisplayContainer/DisplayContainer';

export default function App() {
  return (
    <Router>
      <div>
        {/* <Link to="/">Home</Link> */}
        <Switch>
          <Route exact path="/" component={DisplayContainer} />  
          {/* <Route exact path="/characters/:id" component={DetailView} /> */}
        </Switch>
      </div>
    </Router>
  );
}
