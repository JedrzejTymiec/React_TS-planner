import styled from 'styled-components';

export const HoursWrapper = styled.div`
  > div {
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 2px solid transparent;
    border-color: ${(props) => props.theme.greyBgBorder};
    color: ${(props) => props.theme.font};

    @media (max-width: 880px) {
      height: 100px;
    }

    &:first-child {
      border-color: transparent;
      border-top: 2px solid transparent;
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

    span {
      font-weight: 700;
      margin-right: 2px;
    }
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
