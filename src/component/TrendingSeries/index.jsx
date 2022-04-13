import React from 'react';

function TrendingSeries({ trendingTV }) {
  return (
    <>
      <h1>TrendingSeries</h1>
      {trendingTV.map((series) => <p key={series.id}>{series.name}</p>)}
    </>
  );
}

export default TrendingSeries;
