import styled from 'styled-components';

export const CheatDay = styled.div`
  background-color: #fff;
  flex: 1;
  border-radius: 0 7px 0 0;
  cursor: pointer;

  > div {
    &:first-child {
      color: ${(props) => props.theme.green};
      text-transform: uppercase;
      font-size: 1.3rem;
      background-color: #fff;
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
      height: 50px;
      border-right: 2px solid transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid ${(props) => props.theme.whiteBgBorder};
      border-radius: 0 7px 0 0;

      .day {
        margin-right: 5px;
      }

      button {
        display: none;
      }
    }

    &:nth-child(2) {
      height: 458px;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
    }

    &:last-child {
      background-color: #eaeaea;
      height: 66px;
      color: ${(props) => props.theme.font};
      border-radius: 0 0 7px 0;
      border-left: 2px solid transparent;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        height: 30px;
        margin-right: 10px;
      }
    }

    .cheat-day-text {
      writing-mode: vertical-rl;
      background-color: #fff;
      color: ${(props) => props.theme.greyFont};
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin: auto;
      p {
        transform: rotate(180deg);
        margin-bottom: 2rem;
      }
      svg {
        margin: 0;
      }
    }
  }

  @media (max-width: 620px) {
    .day-number {
      justify-content: space-evenly !important;

      button {
        display: block !important;
        background-color: #fff;
        border: 1px solid ${(props) => props.theme.border};
        color: ${(props) => props.theme.font};
        padding: 10px;
        border-radius: 7px;

        &:active {
          background-color: ${(props) => props.theme.darkBg};
        }
      }
    }
  }
`;
