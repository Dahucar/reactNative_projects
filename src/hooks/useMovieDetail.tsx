/* eslint-disable prettier/prettier */
import { useEffect, useRef, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieDBInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';

interface MovieDetail {
  isLoading: boolean,
  fullMovie?: MovieFull,
  cast: Cast[],
}

export const useMovieDetail = (movieId: number) => {
  const movieIdRef = useRef(movieId);
  const [state, setState] = useState<MovieDetail>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetail = async () => {
    const moviePromise = movieDB.get<MovieFull>(`/${movieIdRef.current}`);
    const creditsPromise = movieDB.get<CreditsResponse>(`/${movieIdRef.current}/credits`);

    const [ movieResponse, creditsResponse ] = await Promise.all([ moviePromise, creditsPromise ]);

    setState({
      isLoading: false,
      fullMovie: movieResponse.data,
      cast: creditsResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return { ...state };
};
