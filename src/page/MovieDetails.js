import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { fetchById } from '../services/api';
import MovieCard from '../components/Card/Card';
import { Button, Container } from './MovieDetails.styled';

const MovieDelails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [findMovie, setFindMovie] = useState({});

  useEffect(() => {
    const fetchFindMovie = async movieId => {
      try {
        const movieData = await fetchById(movieId);
        setFindMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFindMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">Back to list</Button>
        </Link>
        <MovieCard movie={findMovie} />{' '}
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDelails;
