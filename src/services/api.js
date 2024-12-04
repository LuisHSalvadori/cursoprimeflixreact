
import axios from 'axios';

// url base https://api.themoviedb.org/3/
//url da api /movie/now_playing?api_key=6e5425ba6af4f453e88dd44ba6b60ee9,

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
  });

  export default api;