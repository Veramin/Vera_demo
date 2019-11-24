import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
// import stateful class components
import Welcome from './components/welcome'

function App() {
  return (
      <div className="App">
          <Greet></Greet>
          <Welcome />
    </div>
  );
}

export default App;
