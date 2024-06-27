import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>IMDB</h1>
      <p>Explora nuestras películas populares:</p>
      <Link to="/movies">Ver películas populares</Link>
    </div>
  );
};

export default Home;
