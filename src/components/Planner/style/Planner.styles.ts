import styled from 'styled-components';

export const PlannerWrapper = styled.div`
  width: 978px;
  margin: 2rem auto;

  .body {
    display: flex;
    height: 580px;
    background-color: ${(props) => props.theme.darkBg};
    border-radius: 7px;
    color: ${(props) => props.theme.greyFont};
  }
`;
