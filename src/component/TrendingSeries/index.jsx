import React from 'react';

function TrendingSeries({ trendingTV }) {
  return (
    <div className="container">
      <h1>TrendingSeries</h1>
      {trendingTV.map((series) => <p key={series.id}>{series.name}</p>)}
    </div>
  );
}

export default TrendingSeries;
