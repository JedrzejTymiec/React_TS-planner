import styled from 'styled-components';

export const ProgressWrapper = styled.div`
  h5 {
    text-transform: uppercase;
    font-size: 10px;
    margin: 10px 5px;
    color: #bdbdbd;
    text-align: left;
  }

  .progress-container {
    display: flex;
    position: relative;

    .progress-bg {
      height: 2px;
      width: 240px;
      background-color: #dbdbdb;
      position: absolute;
      top: 10px;
      left: 6px;
      z-index: -1;
      transform: translateY(-30%);
    }

    .progress {
      height: 2px;
      width: 110px;
      background-color: #000;
      background-color: ${(props) => props.theme.green};
      position: absolute;
      top: 10px;
      left: 5px;
      z-index: 0;
      transform: translateY(-30%);
      transition: 0.2s ease;
    }

    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .circle {
        border: 2px solid #dbdbdb;
        margin: 5px;
        padding: 1px;
        border-radius: 15px;
        width: 5px;
        height: 5px;
        z-index: 1;
        background-color: #dbdbdb;

        &.active {
          background-color: #fff;
        }

        &.active.done {
          background-color: #fff;
        }

        &.done {
          background-color: ${(props) => props.theme.green};
          border-color: ${(props) => props.theme.green};
        }
      }

      p {
        margin: 0;
        font-size: 10px;
        color: #b8b8b8;
      }
    }
  }
`;
