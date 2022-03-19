import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & + & {
    margin-top: 1.5rem;
  }

`;

export const BoxImg = styled.div`
  width: 140px;
  height: 140px;
  flex: 0 0 140px;
  border: 1px solid #C4C4C4;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BoxText = styled.div`
  .title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 0.5rem;
  }

  .oldPrice {
    color: #A5A5A5;
    font-size: 14px;
    font-weight: 500;
  }

  .price {
    font-weight: 500;
    font-size: 18px;
  }
`;
