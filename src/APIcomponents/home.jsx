import { Link } from "react-router-dom";
import "../StyleComponents/home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="main-container">
        <h1>IMDB</h1>
        <p>Bienvenido a la mejor base de datos de reseñas de la zona</p>
      </div>
      <div className="links">
        <Link to="/movies/popular">Ver películas populares</Link>
        <Link to="/tv/popular">Ver TV Shows populares</Link>
        <Link to="/person/popular">Ver personalidades populares</Link>
      </div>
    </div>
  );
};

export default Home;
