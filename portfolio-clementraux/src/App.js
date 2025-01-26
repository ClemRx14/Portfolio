import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import About from './sections/About/About.jsx';
import Projets from './sections/Projets/Projets.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <main>
        <Projets/>
      </main>
    </div>
  );
}

export default App;
