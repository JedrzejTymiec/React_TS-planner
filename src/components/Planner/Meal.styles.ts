import styled from 'styled-components';

export const MealWrapper = styled.div`
  background-color: #fff;
  border-right: 2px solid ${(props) => props.theme.whiteBgBorder};
  border-left: 2px solid #fff !important;
  font-size: 13px;
  padding: 0 10px !important;
  align-items: flex-start !important;
  position: relative;

  p {
    margin-top: 10px !important;
  }

  svg {
    height: 25px;
    position: absolute;
    right: 5px;
    top: 5px;
    color: ${(props) => props.theme.orange};
  }
`;
