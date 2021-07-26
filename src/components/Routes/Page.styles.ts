import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 2rem;
    height: 300px;
  }
`;
