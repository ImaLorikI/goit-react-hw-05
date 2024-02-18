import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../API/API';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import BackLink from '../components/BackLink/BackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
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
      <BackLink href={backLinkRef.current ?? '/'}>Back to all Movies</BackLink>
      {details && <MovieDetails data={details} />}
    </ul>
  );
}
