import axios from 'axios';

const KEY = '9cba7f05f98ca5e43f7d989399a86ec3';

export const fetchTrendingMovies = async ({ abortController }) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&language=en-US&per_page=20`,
      {
        signal: abortController.signal,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieDetails = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US&per_page=20`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`
    );
  } catch (error) {
    console.log(error);
  }
};
