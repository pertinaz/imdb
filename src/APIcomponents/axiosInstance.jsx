import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjBhYWJlYzdhMjA5YmU5OTMzNTE1ODYxZGNlOWZhMSIsIm5iZiI6MTcxOTUxNzQ4NS44OTcxNzEsInN1YiI6IjY2N2M3MjBhMWU3YjMwODYyNzM5YjQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6XWn3MVXwm7ZF0rMckpB1V50CvSY9GfK0chWQyrBVdw`,
  },
});

export default axiosInstance;