import React from 'react';
import { Day } from '../../state/types/days';
import DayComponent from './Day';
import { WeekWrapper } from './Week.styles';
import Printer from '../SVGComponents/Printer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin } from '@fortawesome/free-regular-svg-icons';

type Props = {
  days: Day[];
  currentWeek: number;
};

const Week: React.FC<Props> = ({ days, currentWeek }) => {
  return (
    <WeekWrapper>
      {days?.map((day) => (
        <DayComponent key={day.id} day={day} currentWeek={currentWeek} />
      ))}
      <div className="day cheat-day">
        <div className="day-number">Day {7 + (currentWeek - 1) * 7}</div>
        <div>
          <div className="cheat-day-text">
            <p>GUILT-FREE DAY</p>
            <FontAwesomeIcon icon={faGrin} />
          </div>
        </div>
        <div>
          <Printer /> Print
        </div>
      </div>
    </WeekWrapper>
  );
};

export default Week;
