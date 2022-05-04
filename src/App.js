import React from 'react';
import Project from './components/Project';
import About from './components/About';
// import './App.css';
import Nav from './components/Navigation';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <Project></Project>
        <About></About>
      </main>
    </div>
  );
}

export default App;
