import { useState } from 'react';
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
  const [active, setActive] = useState<boolean[]>([
    false,
    false,
    true,
    false,
    false,
    false,
    false,
  ]);

  const toggleActive = (id: number) => {
    const newState = [false, false, false, false, false, false, false];
    switch (id) {
      case 1:
        newState[0] = true;
        break;
      case 2:
        newState[1] = true;
        break;
      case 3:
        newState[2] = true;
        break;
      case 4:
        newState[3] = true;
        break;
      case 5:
        newState[4] = true;
        break;
      case 6:
        newState[5] = true;
        break;
      case 7:
        newState[6] = true;
        break;
    }
    setActive(newState);
  };

  return (
    <WeekWrapper>
      {days?.map((day) => (
        <DayComponent
          key={day.id}
          day={day}
          currentWeek={currentWeek}
          toggle={toggleActive}
          active={active[day.id - 1]}
        />
      ))}
      <div
        className={active[6] ? 'day cheat-day active' : 'day cheat-day'}
        onClick={() => toggleActive(7)}>
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
