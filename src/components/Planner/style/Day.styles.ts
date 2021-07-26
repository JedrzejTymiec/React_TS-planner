import styled from 'styled-components';

export const DayWrapper = styled.div`
  flex: 1;

  .day-number {
    color: ${(props) => props.theme.green};
    text-transform: uppercase;
    font-size: 1.3rem;
    background-color: #fff;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    height: 50px;
    border-right: 2px solid ${(props) => props.theme.whiteBgBorder};

    .day {
      margin-right: 5px;
    }

    button {
      display: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 2px solid transparent;
    border-color: ${(props) => props.theme.whiteBgBorder};

    &:nth-child(6) {
      border-bottom: none;
    }

    &:nth-child(7) {
      height: 35px;
      border-color: ${(props) => props.theme.greyBgBorder};
      border-right: 2px solid ${(props) => props.theme.greyBgBorder};
      border-left: 2px solid transparent;
      color: ${(props) => props.theme.font};
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
      display: flex;
      justify-content: center;
    }

    &:last-child {
      height: 31px;
      border-bottom: 2px solid transparent;
      border-right: 2px solid ${(props) => props.theme.greyBgBorder};
      border-left: 2px solid transparent;
      border-bottom: 2px solid transparent;
      color: ${(props) => props.theme.font};
      display: flex;
      justify-content: center;
      transition: 0.2s ease;

      svg {
        height: 25px;
      }

      .fa-check {
        height: 10px;
        margin-left: 5px;
      }
    }

    p {
      margin: 0;
    }
  }

  @media (min-width: 1200px) {
    cursor: pointer;

    > div {
      &:last-child {
        cursor: pointer;
        &:hover {
          background-color: #e2e2e2;
        }
      }
    }
  }

  @media (max-width: 620px) {
    .day-number {
      justify-content: space-evenly !important;

      button {
        display: block;
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
