import React from 'react';
import Card from '../Card';

function TrendingMovies({ trendingMovies }) {
  return (
    <div className="container">
      {trendingMovies.map((series) => <Card key={series.id} film={series} />)}
    </div>
  );
}

export default TrendingMovies;
