import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = '164c914423fd26eaa1b5d10be8cf42cc';

export const fetchTrends = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchByName = async query => {
  const response = await axios.get(
    `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return response.data;
};

export const fetchById = async movieId => {
  const response = await axios.get(
    `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios.get(
    `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `${baseURL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
};
