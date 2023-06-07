import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Img,
  List,
  Item,
  Section,
  Info,
  StyledLink,
  AddInfo,
} from './Card.styled';

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;
  const location = useLocation();

  if (!title) {
    return <div>Loading ...</div>;
  }
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : 'https://via.placeholder.com/300x500.png?text=No+photo';

  const vote = vote_average ? `${(vote_average * 10).toFixed(0)}%` : 'No rate';

  return (
    <>
      <Section>
        <Img src={posterUrl} alt={`${title} poster`} />
        <br />
        <Info>
          <h2>{title ?? 'Unknown'}</h2>
          <br />
          <p>Vote: {vote}</p>
          <br />
          <p>
            <b>Overview:</b> {overview}
          </p>
          <br />
          {genres && genres.length > 0 && (
            <p>
              <b>Genres:</b>
              {genres.map(genre => genre.name).join(', ')}
            </p>
          )}
        </Info>
      </Section>{' '}
      <br />
      <AddInfo>
        <List>
          {' '}
          <p> Additional information </p> <br />
          <Item>
            <StyledLink
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </StyledLink>
          </Item>
          <Item>
            <StyledLink
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </Item>{' '}
          <br />
        </List>
      </AddInfo>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
