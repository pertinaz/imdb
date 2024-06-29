import { Link } from "react-router-dom";
import "../StyleComponents/tailwind.css";
const Home = () => {
  return (
    <div className="bg-slate-500">
      <div className=" bg-slate-400 px-6 shadow">
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
