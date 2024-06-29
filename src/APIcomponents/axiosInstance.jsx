import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjBhYWJlYzdhMjA5YmU5OTMzNTE1ODYxZGNlOWZhMSIsIm5iZiI6MTcxOTUxNzQ4NS44OTcxNzEsInN1YiI6IjY2N2M3MjBhMWU3YjMwODYyNzM5YjQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6XWn3MVXwm7ZF0rMckpB1V50CvSY9GfK0chWQyrBVdw`,
  },
  params: {
    api_key: `4b0aabec7a209be9933515861dce9fa1`,
    language: 'es-CO en-EN',
    results: 5
  },  
  posters: {
    file_path: `https://image.tmdb.org/t/p/w500/`,
    aspect_ratio: 0.667,
    height: 1500,
    width: 1000
  }
});

export default axiosInstance;