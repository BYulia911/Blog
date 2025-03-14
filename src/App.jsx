/*import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App;*/

// src/App.jsx

import { Routes, Route, Link } from 'react-router-dom';
import Header from '/src/Components/Header/Header';
import Footer from '/src/Components/Footer/Footer';
import Home from '/src/Pages/Home';
import About from '/src/Pages/About';

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;