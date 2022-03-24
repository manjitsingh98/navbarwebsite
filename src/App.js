import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;
