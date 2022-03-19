import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
`;

export const ButtonStyled = styled.button`
   font-size: 26px;
  color: white;
  background: #3B74F2;
  border-radius: 8px;
  border: 2px solid #3B74F2;
  width: 100%;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    color: #3B74F2;
    background: white;
  }

`;
