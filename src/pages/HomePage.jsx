import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../API/API';
import { MovieList } from '../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchData = await fetchTrendingMovies({ abortController: controller });
        setMovies(fetchData.results);
      } catch (error) {}
    }
    fetchData();
  }, []);
  return (
    <div>
      <ul>{movies.length > 0 && <MovieList movies={movies} />}</ul>
    </div>
  );
}
