import css from './MovieDetails.module.css';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
export const MovieDetails = ({ data }) => {
  return (
    <div >
      <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
      <div>
        <h2>
          {data.original_title}({data.release_date})
        </h2>
        <ul>
          <li>
            <p>User score({data.popularity}%)</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{data.overview || 'No overview yet'} </p>
          </li>
          <li>
            <h3>Genres</h3>
            <p>{data.genres && data.genres.map(genre => genre.name).join(',')}</p>
          </li>
        </ul>
      </div>
      <div>
        <NavLink to="cast">Cast </NavLink>
        <NavLink to="reviews"> Reviews</NavLink>
      </div>
      <Suspense fallback="Loading">
      <Outlet />
      </Suspense>
    </div>
  );
};
