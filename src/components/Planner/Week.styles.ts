import styled from 'styled-components';
import { theme } from '../../App.styles';

export const WeekWrapper = styled.div`
  display: flex;

  .day {
    flex: 1;
    cursor: pointer;

    .day-number {
      color: ${(props) => props.theme.green};
      text-transform: uppercase;
      font-size: 1.3rem;
      border-top: 2px solid transparent;
      border-left: 2px solid transparent;
    }

    > div:nth-child(7) {
      border-color: ${(props) => props.theme.greyBgBorder};
      border-right: 2px solid ${(props) => props.theme.greyBgBorder};
      border-left: 2px solid transparent;
      color: ${(props) => props.theme.font};
      text-transform: uppercase;
      font-size: 11px;
      font-weight: 600;
      display: flex;
      justify-content: center;
    }

    > div:nth-child(8) {
      border-right: 2px solid ${(props) => props.theme.greyBgBorder};
      border-left: 2px solid transparent;
      border-bottom: 2px solid transparent;
      color: ${(props) => props.theme.font};
      display: flex;
      justify-content: center;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        background-color: #e2e2e2;
      }

      svg {
        height: 25px;
      }

      .fa-check {
        height: 10px;
        margin-left: 5px;
      }
    }
  }

  .day.active {
    color: #000;

    .day-number {
      border-top-color: ${(props) => props.theme.orange};
      border-left-color: ${(props) => props.theme.orange};
      border-right-color: ${(props) => props.theme.orange} !important;
      color: ${(props) => props.theme.orange};
    }

    > div {
      border-left-color: ${(props) => props.theme.orange} !important;
      border-right-color: ${(props) => props.theme.orange} !important;

      &:last-child {
        border-bottom-color: ${(props) => props.theme.orange};
      }
    }
  }

  .cheat-day.active p,
  .cheat-day.active div:nth-child(2) svg {
    color: #000;
  }
`;
