// /* eslint-disable no-console */
// /* eslint-disable react/jsx-no-constructed-context-values */
// import React, { useEffect, useState } from 'react';
// import APIContext from './APIContext';

// // export const APIContext = createContext();

// function DataProvider({ children }) {
//   const [trendingMovies, setTrendingMovies] = useState([]);
//   const [trendingTV, setTrendingTV] = useState([]);
//   const a = 'test data';
//   console.log(2222, children);
//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
//       .then((res) => res.json())
//       .then((results) => {
//         setTrendingMovies(results.results);
//       });
//     fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`)
//       .then((res) => res.json())
//       .then((results) => {
//         setTrendingTV(results.results);
//       });
//     return () => { setTrendingMovies([]); setTrendingTV([]); };
//   }, []);

//   return (
//     <APIContext.Provider value={{ trendingMovies, trendingTV, a }}>
//       {children}
//     </APIContext.Provider>
//   );
// }

// export default DataProvider;
