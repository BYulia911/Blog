import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from '/src/Components/Footer/Footer';
import Home from '/src/Pages/Home/Home';
import About from '/src/Pages/About';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  );
}

export default App;