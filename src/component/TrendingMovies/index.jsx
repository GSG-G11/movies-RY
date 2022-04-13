import React from 'react';

function TrendingMovies({ trendingMovies }) {
  return (
    <div className="container">
      <h1>TrendingMovies</h1>
      {trendingMovies.map((series) => <p key={series.id}>{series.title}</p>)}
    </div>
  );
}

export default TrendingMovies;
