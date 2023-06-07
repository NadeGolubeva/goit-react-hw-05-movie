import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px;
  // padding-left: 50px;
`;

export const Title = styled.h2`
  margin: 10px;
  font-size: 34px;
  font-weight: 500;
  color: #5c65b7;
`;

export const List = styled.ul`
  list-style: disc;
  color: #2f3132;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  font-size: 22px;
  color: #2f3132;

  &:hover,
  &:focus {
    color: #5c65b7;
  }
`;
