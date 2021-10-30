/* eslint-disable prettier/prettier */
import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'bcf31cca7f84e10c60da29d4fa39a830',
    language: 'es-ES',
  },
});

export default movieDB;
