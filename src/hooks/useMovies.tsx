/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDbI, Movies } from '../interfaces/movieDBInterface';

/* eslint-disable prettier/prettier */
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesList, setMoviesList] = useState<Movies[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDbI>('/now_playing');
    setMoviesList(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesList,
    isLoading,
  };
};
