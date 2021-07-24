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

    li {
      font-weight: 700;
      cursor: pointer;
      position: relative;

      a {
        color: ${(props) => props.theme.font};
        text-decoration: none;
        display: inline-block;
      }

      .dash {
        position: absolute;
        bottom: -10px;
        height: 2px;
        width: 0;
        background: ${(props) => props.theme.font};
        left: 50%;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
      }

      &:hover {
        .dash {
          left: 33%;
          width: 33%;
        }
      }

      &.active {
        a {
          color: ${(props) => props.theme.orange};
        }

        .dash {
          width: 33%;
          left: 33%;
          background: ${(props) => props.theme.orange};
        }
      }
    }
  }
`;
