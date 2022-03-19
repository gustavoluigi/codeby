import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid #c4c4c4;
`;

export const Container = styled.div`
  padding: 2rem;
`;

export const LinkStyled = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  display: block;
  color: black;
  text-decoration: none;
  transition: all .2s ease-in-out;
  padding: 0rem 2rem;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background: black;
    display: block;
    margin-right: 1rem;
    border-radius: 100%;
    transition: all .2s ease-in-out;
  }

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    color: #3B74F2;

    &:before {
      background: #3B74F2;
    }
  }
`;
