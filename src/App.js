import React from 'react';
import Home from './pages/Home';
import Video from './pages/Video';
import Navbar from './components/navBar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/videos/:videoId" element={<Video />} />

      </Routes>
      <Footer></Footer>
    </Router>


  );
}

export default App;
