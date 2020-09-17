import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Actors from './components/actors';
import Actress from './components/actress';
import Films from './components/films';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar title="Oscars 2020" />
        <Route exact path="/" render={() => <Home title="Oscars Winners" />} />
        <Route path="/actors" render={() => <Actors title="Best Actors" />} />
        <Route path="/actress" render={() => <Actress title="Oscars Winners" />} />
        <Route path="/films" render={() => <Films title="Oscars Winners" />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
