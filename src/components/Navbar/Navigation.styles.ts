import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 79px;

  @media (max-width: 550px) {
    justify-content: center;
    padding: 10px 0;
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

    @media (max-width: 550px) {
      border: 0;
      padding: 10px 5px;
    }

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
