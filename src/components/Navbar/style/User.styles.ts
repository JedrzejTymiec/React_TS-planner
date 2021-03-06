import styled from 'styled-components';

export const UserWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 79px;
  position: relative;

  div {
    display: flex;
    align-items: center;
    img {
      margin-right: 0.5rem;
      border-radius: 50px;
      -webkit-box-shadow: 1px 2px 3px -1px rgba(130, 130, 130, 1),
        -1px 1px 3px -1px rgba(130, 130, 130, 1);
      -moz-box-shadow: 1px 2px 3px -1px rgba(130, 130, 130, 1),
        -1px 1px 3px -1px rgba(130, 130, 130, 1);
      box-shadow: 1px 2px 3px -1px rgba(130, 130, 130, 1),
        -1px 1px 3px -1px rgba(130, 130, 130, 1);
    }

    svg {
      margin: 0 0.5rem;
    }
  }

  @media (min-width: 1200px) {
    cursor: pointer;
  }

  @media (max-width: 550px) {
    justify-content: center;
    padding: 10px 0;
  }
`;
