import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../API/API';
import { Link } from 'react-router-dom';

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
  console.log(movies);
  return (
    <div>
      Movies page
      {movies.length > 0 && (
        <ul>
          {movies.map(items => {
            <Link to={`/movies/${items.id}`} key={items.id}>
              {items.title}
            </Link>;
          })}
        </ul>
      )}
    </div>
  );
}
