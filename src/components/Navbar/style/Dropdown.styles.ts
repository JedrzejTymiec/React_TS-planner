import styled from 'styled-components';

export const DropdownWrapper = styled.ul`
  position: absolute;
  top: 65px;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.whiteBgBorder};
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  

  li {
    padding: 10px 30px;
    transition: background-color 0.2s ease-in, color 0.2s ease-in;
    color: ${(props) => props.theme.font};

    &.logout {
      background-color: ${(props) => props.theme.darkBg};

      svg {
        margin-left: 5px;
      }
    }
  }

  @media (min-width: 1200px) {
    .settings:hover {
      background-color: ${(props) => props.theme.grey};
    }

    .logout:hover {
      background-color: #e0e0e0};
    }
  }
`;
