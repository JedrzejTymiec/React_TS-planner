import styled from 'styled-components';

export const PlannerBodyWrapper = styled.div`
  display: flex;
  height: 580px;
  background-color: ${(props) => props.theme.darkBg};
  border-radius: 7px;
  color: ${(props) => props.theme.greyFont};

  .day-number,
  .cheat-day {
    background-color: #fff;
  }
  .cheat-day {
    height: 100%;

    div {
      &:first-child {
        height: 50px;
        border-right-color: transparent !important;
      }

      &:nth-child(2) {
        height: 458px;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;
      }

      &:last-child {
        background-color: #eaeaea;
        height: 66px !important;
        color: ${(props) => props.theme.font};
        border-radius: 0 0 7px 0;
        border-left: 2px solid transparent;
        border-right: 2px solid transparent;

        svg {
          height: 30px;
          margin-right: 10px;
        }
      }

      .cheat-day-text {
        writing-mode: vertical-rl;
        background-color: #fff;
        color: ${(props) => props.theme.greyFont};
        width: 100%;
        height: 100% !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        p {
          transform: rotate(180deg);
          margin-bottom: 2rem;
        }
        svg {
          margin: 0;
        }
      }
    }
  }

  .hours,
  .day {
    > div {
      height: 90px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 2px solid transparent;

      &:first-child {
        height: 50px;
        border-right: 2px solid ${(props) => props.theme.whiteBgBorder};
      }

      &:nth-child(6) {
        border-bottom: none;
      }

      &:nth-child(7) {
        height: 35px;
      }

      &:last-child {
        height: 31px;
        border-bottom: 2px solid transparent;
      }

      p {
        margin: 0;
      }
    }
  }

  .hours > div {
    border-color: ${(props) => props.theme.greyBgBorder};
    color: ${(props) => props.theme.font};

    &:first-child {
      border-color: transparent;
      border-top: 2px solid transparent;
    }

    span {
      font-weight: 700;
      margin-right: 2px;
    }
  }

  .day > div {
    border-color: ${(props) => props.theme.whiteBgBorder};
  }

  .workout {
    font-weight: 600;
    font-size: 11px;
    display: flex;
    justify-content: center;

    svg {
      margin-left: 5px;
      height: 9px;
    }
  }
`;
