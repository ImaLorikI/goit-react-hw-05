import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByQuery } from '../API/API';

import { MovieList } from '../components/MovieList/MovieList';
import SearchMovie from '../components/Search/Search';

export default function MoviesPage() {
  const [films, setFilms] = useState([]);

  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const changeSearch = newSearch => {
    params.set('search', newSearch);
    setParams(params);
  };

  const searchFilms = async query => {
    try {
      const response = await fetchByQuery(query);
      setFilms(response.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (search.trim() !== '') {
      searchFilms(search);
    }
  }, [search]);

  return (
    <div>
      <SearchMovie onSearch={changeSearch} value={search} />
      {films.length > 0 && <MovieList movies={films} />}
    </div>
  );
}
