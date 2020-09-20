import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import ActorContainer from './components/actorsContainer';
import ActressContainer from './components/actress';
import Films from './components/films';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2020" />
        <Route exact path="/" render={() => <Home title="Oscars Winners" />} />
        <Route path="/actors" render={() => <ActorContainer title="Best Actors" />} />
        <Route path="/actress" render={() => <ActressContainer title="Best Actress" />} />
        <Route path="/films" render={() => <Films title="Best Films" />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
