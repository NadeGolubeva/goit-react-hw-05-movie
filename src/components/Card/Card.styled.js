import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

export const Img = styled.img`
  max-height: 500px;
  max-width: 300px;
`;

export const Info = styled.div`
  // padding-top: 20px;
  max-width: 1100px;
`;

export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  font-size: 18px;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(92, 101, 183);
  text-decoration: none;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #1908a6;
    color: #ffffff;
  }
`;

export const AddInfo = styled.div`
  padding-top: 10px;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
`;
