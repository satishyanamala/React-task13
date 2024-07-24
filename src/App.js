import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import BlogerDetails from './Components/BlogerDetails/BlogerDetails';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogerDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
