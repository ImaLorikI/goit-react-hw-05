import { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../API/API';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import BackLink from '../components/BackLink/BackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLink = location.state?.from ?? '/'; 

  const [details, setDetails] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchData = await fetchMovieDetails(params.movieId);
        setDetails(fetchData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [params]);
  return (
    <ul>
      <BackLink href={backLink}></BackLink>
      {details && <MovieDetails data={details} />}
     
    </ul>
  );
}
