import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../API/API';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
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
  return <ul>{details && <MovieDetails data={details} />}</ul>;
}
