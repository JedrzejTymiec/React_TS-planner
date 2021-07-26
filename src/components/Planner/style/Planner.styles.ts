import styled from 'styled-components';

export const PlannerWrapper = styled.div`
  width: 978px;
  margin: 2rem auto;

  .body {
    display: flex;
    height: 582px;
    background-color: ${(props) => props.theme.darkBg};
    border-radius: 7px;
    color: ${(props) => props.theme.greyFont};
  }

  @media (max-width: 980px) {
    width: auto;
  }

  @media (max-width: 900px) {
    .body {
      height: 508px;
    }
  }

  @media (max-width: 620px) {
    .body {
      height: 383px;
    }
  }
`;
