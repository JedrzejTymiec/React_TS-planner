import styled from 'styled-components';

export const NavigationWrappper = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin: 0 1rem;
    font-weight: 400;
    color: ${(props) => props.theme.orange};
    width: 190px;
    text-align: center;
  }

  .btn {
    color: #838383;
    border: solid 1px #c0c0c0;
    height: 3rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.appBg};
    transition: background-color 0.2s ease;

    &:disabled {
      color: ${(props) => props.theme.grey};
      cursor: auto;
    }
  }

  @media (min-width: 1200px) {
    .btn {
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.grey};
      }

      &:disabled {
        &:hover {
          background-color: ${(props) => props.theme.appBg};
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .btn {
      &:active {
        background-color: ${(props) => props.theme.grey};
      }
    }
  }

  @media (max-width: 780px) {
    margin: 20px 0;
    width: 45%;
    margin-right: 3%;
  }

  @media (max-width: 550px) {
    margin: 10px 0;
    width: auto;
  }
`;
