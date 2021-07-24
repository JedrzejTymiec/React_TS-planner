import styled from 'styled-components';

export const MealWrapper = styled.div`
  background-color: #fff;
  border-right: 2px solid ${(props) => props.theme.whiteBgBorder};
  font-size: 13px;
  padding: 0 10px !important;
  align-items: flex-start !important;

  p {
    margin-top: 10px !important;
  }
`;
