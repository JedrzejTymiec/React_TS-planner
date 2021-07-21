import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.font};
  border-bottom: 1px solid ${(props) => props.theme.border};
  -webkit-box-shadow: 0px 2px 3px -3px rgba(225, 225, 225, 1);
  -moz-box-shadow: 0px 2px 3px -3px rgba(225, 225, 225, 1);
  box-shadow: 0px 3px 3px -3px rgba(225, 225, 225, 1);

  .container {
    display: flex;
    width: 978px;

    > div {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 79px;

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
        margin-left: 0.5rem;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    border-left: 1px solid #efefef;
    height: 100%;
    width: 370px;
    align-items: center;
    justify-content: space-evenly;

    li:first-child {
      color: ${(props) => props.theme.orange};

      .dash {
        background-color: ${(props) => props.theme.orange};
      }
    }

    li {
      font-weight: 700;
      position: relative;

      .dash {
        width: 25px;
        margin: auto;
        height: 2px;
        background-color: #fff;
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
