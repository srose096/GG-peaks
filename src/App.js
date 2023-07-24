import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mountain from "./pages/Mountain";
import Passes from "./pages/Passes";
import Shop from "./pages/Shop";
import Rentals from './pages/Rentals';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Mountain" element={<Mountain />} />
            <Route path="/Passes" element={<Passes />} />
            <Route path="/Rentals" element={<Rentals />} />
            <Route path="/Shop" element={<Shop />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
