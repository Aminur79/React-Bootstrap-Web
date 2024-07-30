// App.js
import React from 'react';
import Navbar from './Proj/Navbar'; // Ensure this path is correct
import Home from './Proj/Home';     // Ensure this path is correct
import Contact from './Proj/Contact'; // Ensure this path is correct
import Todo from './Proj/Todo'
import PassGene from './Proj/PassGene'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Home from './Proj/Prop'

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/passgene" element={<PassGene />} />
      </Routes>
    </Router>
  );
}

export default App;
