import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 978px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;

  .footer-section {
    flex: 1;
    padding: 0 20px;
    margin-right: 20px;
    margin-top: 20px;
    border-right: 1px solid ${(props) => props.theme.greyBgBorder};
    color: ${(props) => props.theme.font};

    &.buy-now {
      padding-left: 0;
    }

    &.faq {
      border-right: none;
      margin-right: 0;
    }

    h1 {
      font-size: 1.8rem;
      margin: 0;
    }

    p {
      font-size: 15px;
      line-height: 1.5rem;
    }

    .buttons-container {
      display: flex;
    }

    button {
      height: 40px;
      padding: 8px 15px;
      margin-bottom: 10px;
      font-size: 18px;
      color: ${(props) => props.theme.font};
      border-radius: 7px;
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.font};
      margin-right: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: 0.2s ease;

      span {
        margin: 0 7px;
      }

      svg {
        font-size: 20px;
      }

      .apple {
        font-size: 23px;
      }

      .android {
        height: 25px;
        display: inline-block;
      }
    }
  }

  @media (min-width: 1200px) {
    button {
      &:hover {
        background-color: ${(props) => props.theme.grey};
      }
    }
  }

  @media (max-width: 1200px) {
    button {
      &:active {
        background-color: ${(props) => props.theme.grey};
      }
    }
  }

  @media (max-width: 980px) {
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .footer-section {
      border-right: none;
      padding: 10px 0;
      width: 80%;
      margin-right: 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${(props) => props.theme.greyBgBorder};

      h1 {
        font-size: 1.5rem;
      }

      .buttons-container {
        flex-direction: column;
        button {
          justify-content: center;
        }
      }

      button {
        margin-right: 0;
      }

      &.buy-now {
        button {
          min-width: 111.55px;
        }
      }

      &.faq {
        button {
          min-width: 135.55px;
        }
      }
    }
  }

  @media (max-width: 880px) {
    > div {
      button {
        padding: 5px 7px;
      }
    }
  }

  @media (max-width: 620px) {
    > div {
      flex-direction: column;

      button {
        justify-content: center;
      }
    }
  }
`;
