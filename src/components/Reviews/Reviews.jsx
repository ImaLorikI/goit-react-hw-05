import {useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCastRew } from '../../API/API';
import css from './Reviews.module.css';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    async function fetchReviewsData() {
      try {
        const fetchedReviewsData = await fetchCastRew(movieId, 'reviews');
        setReviews(fetchedReviewsData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchReviewsData();
  }, [movieId]);

  return (
    <>
      {reviews && reviews.results.length > 0 ? (
        <div>
          <ul>
            {reviews.results.map(review => (
              <li key={review.id}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>We don't have any reviews for this movie </p>
      )}
    </>
  );
}
