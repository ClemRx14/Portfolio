import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import About from './sections/About/About.jsx';
import Projets from './sections/Projets/Projets.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <About/>
      <main>
        <Projets/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
