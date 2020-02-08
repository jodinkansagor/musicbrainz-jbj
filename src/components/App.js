import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Albums from '../containers/Albums';
import Artist from '../containers/Artist';
import Lyrics from './lyrics/Lyrics';
import Header from './common/Header';
import Recordings from '../containers/Recordings';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Artist} />
        <Route path='/albums/:artistId/:artistName' component={Albums} />
        <Route path='/recordings/:albumId/:artistName' component={Recordings} />
        <Route path='/lyrics/:artistName/:recordingTitle' component={Lyrics} />
      </Switch>
    </Router>
  );
}

