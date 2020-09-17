import React from 'react';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar title="Oscars 2020" />
      <Home title="Oscars Winner" />
    </div>
  );
}

export default App;
