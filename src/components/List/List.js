import PropTypes from 'prop-types';
import { Section, StyledLink, Title, List } from './List.styled';

const MovieList = ({ trendingMovies }) => {
  return (
    <Section>
      <Title>Trending today</Title>

      <List>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
