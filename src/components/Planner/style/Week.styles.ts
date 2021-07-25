import styled from 'styled-components';

export const WeekWrapper = styled.div`
  display: flex;
  width: 100%;

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

  @media (max-width: 900px) {
    .day {
      width: 50px;
      transition: width 0.5s ease;
      > div {
        border-bottom-color: transparent;

        &:first-child {
          justify-content: center;
        }

        p {
          display: none;
        }
        .day {
          display: none;
        }

        svg {
          display: none;
        }

        .carb {
          display: none;
        }
      }

      &.cheat-day {
        display: flex;
        flex-direction: column;
        justify-content: space-space-between;
        border-radius: 0 0 7px 0;
        > div {
          &:nth-child(2) {
            border-radius: 0 0 7px 0;
            flex: 1;

            > div {
              height: 90%;
            }
          }

          &:last-child {
            display: none;
          }
        }
      }
    }

    .day.active {
      width: 300px;
      flex: 0 1 auto;

      > div {
        border-bottom-color: ${(props) => props.theme.whiteBgBorder};

        &:nth-child(7) {
          border-bottom-color: ${(props) => props.theme.greyBgBorder};
        }
        p {
          display: block;
        }
        .day {
          display: inline;
        }

        svg {
          display: block;
        }

        .carb {
          display: inline;
        }
      }

      &.cheat-day > div {
        &:nth-child(2) {
          border-bottom: 2px solid ${(props) => props.theme.orange};
        }
      }
    }
  }

  @media (max-width: 725px) {
    .day.active {
      width: 200px;
    }
  }

  @media (max-width: 620px) {
    .day {
      display: none;

      &.active {
        display: block;
        width: 100%;

        > div {
          justify-content: center;
        }

        span {
          width: auto;
        }
      }

      &.cheat-day {
        display: none;
      }
    }
  }
`;
