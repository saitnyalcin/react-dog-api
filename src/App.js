import React from 'react';
import logo from '../src/images/dogs.png';
import './App.css';
import Dog from './components/Dog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Enjoy by learning more about the Dog families</p>
      </header>
      <div>
        <Dog />
      </div>
    </div>
  );
}

export default App;
