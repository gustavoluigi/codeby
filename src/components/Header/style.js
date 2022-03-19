import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid #C4C4C4;
  position: relative;

  a {
    position: absolute;
    left: 2rem;
    color: #3B74F2;
    font-size: 14px;
    text-decoration: none;
    top: 50%;
    transform: translateY(-50%);
  }
`;
