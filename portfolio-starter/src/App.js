import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import ProjectDetails from "./ProjectDetails";
import { Projects } from "./Projects";
import { Routes, Route } from 'react-router-dom';

function NotFound() {
  return <h1>Not found - 🙈</h1>
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* you can prefix the routes */}
        {/* <Route path='/app'> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='*' element={<NotFound />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;