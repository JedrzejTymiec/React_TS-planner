import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 978px;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;

  > div {
    flex: 1;
    padding: 0 20px;
    margin-right: 20px;
    margin-top: 20px;
    border-right: 1px solid ${(props) => props.theme.greyBgBorder};
    color: ${(props) => props.theme.font};

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
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

      &:hover {
        background-color: ${(props) => props.theme.grey};
      }
    }
  }
`;
