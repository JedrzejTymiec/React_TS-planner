import styled from 'styled-components';

export const MealWrapper = styled.div`
  height: 90px;
  background-color: #fff;
  border-right: 2px solid ${(props) => props.theme.whiteBgBorder};
  border-left: 2px solid #fff !important;
  font-size: 13px;
  position: relative;
  transition: 0.2s ease;
  overflow: hidden;

  p {
    padding: 10px;
  }

  svg {
    height: 25px;
    width: 25px;
    float: right;
    color: ${(props) => props.theme.orange};
  }

  img {
    width: 70%;
    position: absolute;
    top: 30%;
    filter: grayscale(70%);
    transition: filter 0.3s ease-in;
    display: block;
    margin-left: 20px;
  }

  @media (min-width: 1200px) {
    &:hover {
      background-color: ${(props) => props.theme.appBg};
    }
  }

  @media (max-width: 900px) {
    height: 75px;
  }

  @media (max-width: 620px) {
    height: 50px;
  }
`;
