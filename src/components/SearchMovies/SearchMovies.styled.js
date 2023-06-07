import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
  width: 400px;
`;

export const Button = styled.button`
  font-size: 16px;
  margin-right: 10px;
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
