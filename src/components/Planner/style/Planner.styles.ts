import styled from 'styled-components';

export const PlannerWrapper = styled.div`
  width: 978px;
  margin: 2rem auto;

  @media (max-width: 980px) {
    width: auto;
  }

  .body {
    display: flex;
    height: 580px;
    background-color: ${(props) => props.theme.darkBg};
    border-radius: 7px;
    color: ${(props) => props.theme.greyFont};
  }

  @media (max-width: 880px) {
    .body {
      height: 630px;
    }
  }
`;
