import styled from 'styled-components';

export const TotalBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid #C4C4C4;

  >p {
    font-weight: 700;
    font-size: 24px;
    flex: 0 0 50%;

    &:nth-child(2) {
      text-align: right;
    }
  }

  .alert {
    background: #C7FFA6;
    color: #217A00;
    font-weight: 600;
    border-radius: 50px;
    display: table;
    margin: 1rem auto 0;
    padding: .75rem 2rem;
    font-size: 18px;
    text-align: center;
  }
`;
