import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(items => (
        <li key={items.id}>
          <Link to={`/movies/${items.id}`} >
            {items.title}
          </Link>
        </li>
      ))}
    </>
  );
};
