import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
// import MoviesPage from '../pages/MoviesPage';
// import HomePage from '../pages/HomePage';
// import NotFoundPage from '../pages/NotFoundPage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const HomePage = lazy(() => import('../pages/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
