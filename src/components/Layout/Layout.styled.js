import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 20px 30px;
  // text-align: center;
  box-shadow: 0px 4px 4px #d3d3d3;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  text-decoration: none;
  color: #2f3132;

  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active,
  &:hover,
  &:focus {
    color: #5c65b7;
    text-decoration: underline;
  }
`;
