import React from 'react';
import Card from '../Card';

function TrendingSeries({ trendingTV }) {
  return (
    <div className="container">
      {trendingTV.map((series) => <Card key={series.id} film={series} />)}
    </div>
  );
}

export default TrendingSeries;
