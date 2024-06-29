import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>IMDB</h1>
      <p>Bienvenido a la mejor base de datos de reseñas de la zona</p>
      <Link to="/movies/popular">Ver películas populares</Link> 
      <Link to="/tv/popular">Ver TV Shows populares</Link>
      <Link to="/person/popular">Ver personalidades populares</Link>
    </div>
  );
};

export default Home;
