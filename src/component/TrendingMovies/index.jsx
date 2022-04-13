import React from 'react';

function TrendingMovies({ trendingMovies }) {
  return (
    <>
      <h1>TrendingMovies</h1>
      {trendingMovies.map((series) => <p key={series.id}>{series.title}</p>)}
    </>
  );
}

export default TrendingMovies;
