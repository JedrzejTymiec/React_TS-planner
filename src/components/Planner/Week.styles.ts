import styled from 'styled-components';

export const WeekWrapper = styled.div`
  display: flex;

  .day {
    flex: 1;
    cursor: pointer;

    .day-number {
      color: ${(props) => props.theme.orange};
      text-transform: uppercase;
      font-size: 1.3rem;
    }

    > div:nth-child(7) {
      border-color: ${(props) => props.theme.greyBgBorder};
      border-right: 2px solid ${(props) => props.theme.greyBgBorder};
      color: ${(props) => props.theme.font};
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
      display: flex;
      justify-content: center;
    }

    > div:nth-child(8) {
      border-right: 2px solid ${(props) => props.theme.greyBgBorder};
      color: ${(props) => props.theme.font};
      display: flex;
      justify-content: center;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        background-color: #e2e2e2;
      }

      svg {
        height: 25px;
      }

      .fa-check {
        height: 10px;
        margin-left: 5px;
      }
    }
  }

  .day.active {
    border: 2px solid ${(props) => props.theme.orange};
    color: #000;
  }

  .cheat-day.active p,
  .cheat-day.active svg {
    color: #000;
  }
`;
