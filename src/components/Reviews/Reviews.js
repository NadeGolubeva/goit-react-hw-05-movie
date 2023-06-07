import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/api';
import { List, Section } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovReviews = async () => {
      try {
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovReviews();
  }, [movieId]);

  return (
    <Section>
      <h3>Reviews</h3>
      {reviews.length ? (
        <List>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </List>
      ) : (
        <p>No reviews for this movie.</p>
      )}
    </Section>
  );
};
export default Reviews;
