import React from 'react';
import Organizations from './components/Organizations';
import Navigation from './components/navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Organizations />
    </div>
  );
}

export default App;
