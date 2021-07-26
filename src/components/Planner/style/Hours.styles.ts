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

    span {
      font-weight: 700;
      margin-right: 2px;
    }
  }

  .blank-day-row {
    border-color: transparent;
    border-top: 2px solid transparent;
    height: 50px;
    border-right: 2px solid ${(props) => props.theme.whiteBgBorder};
  }

  .pm6 {
    border-bottom: none;
  }

  .blank-carb-row {
    height: 35px;
  }

  .workout {
    height: 31px;
    border-bottom: 2px solid transparent;
    font-weight: 600;
    font-size: 11px;
    display: flex;
    justify-content: center;

    p {
      margin: 0;
    }

    svg {
      margin-left: 5px;
      height: 9px;
    }
  }

  @media (max-width: 900px) {
    > div {
      height: 75px;
    }
  }

  @media (max-width: 620px) {
    > div {
      height: 50px;
    }
  }
`;
