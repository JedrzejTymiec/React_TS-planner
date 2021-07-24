import styled from 'styled-components';

export const WeekWrapper = styled.div`
  display: flex;

  .day.active {
    color: #000;

    .day-number {
      border-top-color: ${(props) => props.theme.orange};
      border-left-color: ${(props) => props.theme.orange};
      border-right-color: ${(props) => props.theme.orange};
      color: ${(props) => props.theme.orange};
    }

    > div {
      border-left-color: ${(props) => props.theme.orange} !important;
      border-right-color: ${(props) => props.theme.orange} !important;

      &:last-child {
        border-bottom-color: ${(props) => props.theme.orange};
      }
    }
  }

  .cheat-day.active p,
  .cheat-day.active div:nth-child(2) svg {
    color: #000;
  }
`;
