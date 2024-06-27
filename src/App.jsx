import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import axiosInstance from './axiosIstance'

function App() {

  const [movies,setMovies] = useState([]);
  const [shows,setShows] = useState([]);
  const [people, setPeople] = useState([]);
  
  useEffect(() =>{
    fetchMovies();
    fetchShows();
    fetchPeople();    
  },[]);

  return (
    <div className='App'>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie =>(
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h1>TV Shows</h1>
      <ul>
        {shows.map(show =>(
          <li key={show.id}>{show.name}</li>
        ))}
      </ul>

      <h1>People</h1>
      <ul>
        {people.map(person =>(
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
