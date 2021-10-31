/* eslint-disable prettier/prettier */
import axios from 'axios';
import { API_KEY_MOVIE_DB } from '../configurations';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: API_KEY_MOVIE_DB,
    language: 'es-ES',
  },
});

export default movieDB;
