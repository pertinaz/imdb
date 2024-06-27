import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // URL base de la API de TMDB
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer 4b0aabec7a209be9933515861dce9fa1`, // Añade tu token de acceso aquí
  },
});

export default axiosInstance;