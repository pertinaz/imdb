import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{   
        accept: 'application/json'
    },
    params: {
        api_key:'4b0aabec7a209be9933515861dce9fa1',
        imagePATH:'https://image.tmdb.org/t/p/original',
        language: 'es-CO'
    }
});

export default axiosInstance;