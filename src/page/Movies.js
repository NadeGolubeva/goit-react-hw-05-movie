import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchByName } from '../services/api';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import { List, Title, StyledLink, Section } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };
    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <Section>
        <Title>Movies Page</Title>
        <SearchMovies onSubmit={handleSubmit} />{' '}
        <List>
          {movies.map(movie => (
            <li key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </li>
          ))}
        </List>
      </Section>
    </main>
  );
};

export default Movies;
