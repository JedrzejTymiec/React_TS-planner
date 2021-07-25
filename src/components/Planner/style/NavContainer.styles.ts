import styled from 'styled-components';

export const NavContainerWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;

  > div {
    flex: 1;
  }

  @media (max-width: 980px) {
    justify-content: space-evenly;
    > div {
      flex: 0 1 auto;
    }
  }

  @media (max-width: 780px) {
    align-items: stretch;
    flex-wrap: wrap;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;
