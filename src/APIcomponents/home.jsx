import React from 'react';
import { Link } from 'react-router-dom';
import ContentMainPage from '../PagesComponents/ContentMainPage';

const Home = () => {
  return (
    <div>
      <h1>IMDB</h1>
      <p>Bienvenido a la mejor base de datos de reseñas de la zona</p>
      <Link to="/popular-movies">Ver películas populares</Link>
      <Link to="/popular-shows">Ver TV Shows populares</Link>
      <Link to="/popular-people">Ver personalidades populares</Link>
      <ContentMainPage />
    </div>
  );
};

export default Home;
