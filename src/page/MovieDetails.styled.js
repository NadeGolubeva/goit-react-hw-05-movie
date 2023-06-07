import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 40px;
`;

export const Button = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  border: 1px solid;
  border-radius: 6px;
  background-color: rgb(92, 101, 183);
  color: rgb(255, 255, 255);

  &:hover,
  &:focus {
    background-color: rgb(25, 8, 166);
    color: #ffffff;
  }
`;
