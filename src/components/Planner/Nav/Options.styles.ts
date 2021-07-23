import styled from 'styled-components';

export const OptionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  h5 {
    text-transform: uppercase;
    font-size: 10px;
    margin: 10px 5px;
    color: #bdbdbd;
    text-align: left;
  }

  .icons {
    margin-top: 5px;
    display: flex;

    > div {
      position: relative;

      .strikethrough {
        height: 2px;
        width: 40px;
        background-color: #d3d3d3;
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
        display: none;
      }

      svg {
        height: 1.5rem;
        margin: 0 0.5rem;
        cursor: pointer;
        transition: transform 0.2s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`;
