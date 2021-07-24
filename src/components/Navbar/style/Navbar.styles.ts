import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.font};
  -webkit-box-shadow: 0px 2px 3px -3px rgba(225, 225, 225, 1);
  -moz-box-shadow: 0px 2px 3px -3px rgba(225, 225, 225, 1);
  box-shadow: 0px 3px 3px -3px rgba(225, 225, 225, 1);

  .container {
    display: flex;
    width: 978px;

    @media (max-width: 550px) {
      flex-direction: column-reverse;
    }
  }
`;
