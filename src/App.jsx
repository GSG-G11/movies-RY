import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import Search from './component/Search';
import TrendingMovies from './component/TrendingMovies';
import TrendingSeries from './component/TrendingSeries';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trendingMovies" element={<TrendingMovies />} />
          <Route path="/trendingSeries" element={<TrendingSeries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
