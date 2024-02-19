import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      {movies.map(items => (
        <li key={items.id}>
          <Link to={`/movies/${items.id}`} state={{from:location}} >
            {items.title}
          </Link>
        </li>
      ))}
    </>
  );
};
