import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/api';
import { Info, List, Section } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovCast = async () => {
      try {
        const { cast } = await fetchCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovCast();
  }, [movieId]);

  return (
    <Section>
      <h3>Cast</h3>
      {cast.length ? (
        <List>
          {cast.map(actor => (
            <li className="cast-card" key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  src={`https://via.placeholder.com/200x300?text=No+Photo`}
                  alt={`${actor.name} profile`}
                />
              )}
              <Info>
                <b>{actor.name}</b>
                <p>Character: {actor.character}</p>
              </Info>
            </li>
          ))}
        </List>
      ) : (
        <p>Sorry, no information about the cast</p>
      )}
    </Section>
  );
};

export default Cast;
