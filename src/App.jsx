/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import Search from './component/Search';
import TrendingMovies from './component/TrendingMovies';
import TrendingSeries from './component/TrendingSeries';

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTV, setTrendingTV] = useState([]);
  useEffect(() => {
    console.log('useEffect');
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((results) => {
        setTrendingMovies(results.results);
      });
    fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((results) => {
        setTrendingTV(results.results);
      });
    return () => { setTrendingMovies([]); setTrendingTV([]); };
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home trendingMovies={trendingMovies} trendingTV={trendingTV} />} />
          <Route path="/trendingMovies" element={<TrendingMovies trendingMovies={trendingMovies} />} />
          <Route path="/trendingSeries" element={<TrendingSeries trendingTV={trendingTV} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
