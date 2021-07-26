import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
//Types
import { Day } from '../../state/types/days';
//Components
import DayComponent from './Day';
import Printer from '../SVGComponents/Printer';
//Styles
import { WeekWrapper } from './style/Week.styles';
import { CheatDay } from './style/CheatDay.styles';

type Props = {
  days: Day[];
  currentWeek: number;
};

const Week: React.FC<Props> = ({ days, currentWeek }) => {
  const [mobile, setMobile] = useState<boolean>(false);
  const [active, setActive] = useState<boolean[]>([
    false,
    false,
    true,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    window.innerWidth < 620 ? setMobile(true) : setMobile(false);
    window.addEventListener('resize', () => {
      window.innerWidth < 620 ? setMobile(true) : setMobile(false);
    });
  }, []);

  const toggleActive = (id: number, mobile: boolean) => {
    if (!mobile) {
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
    }
  };

  const navigateDay = (id: number, direction: boolean) => {
    if (direction && id < 7) {
      document.getElementById((id + 1).toString())?.classList.add('active');
      document.getElementById(id.toString())?.classList.remove('active');
    }
    if (!direction && id > 1) {
      document.getElementById((id - 1).toString())?.classList.add('active');
      document.getElementById(id.toString())?.classList.remove('active');
    }
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
          mobile={mobile}
          navigateDay={navigateDay}
        />
      ))}
      <CheatDay
        className={active[6] ? 'day cheat-day active' : 'day cheat-day'}
        onClick={() => toggleActive(7, mobile)}
        id="7">
        <div className="day-number">
          <button
            className="prev-btn btn"
            onClick={() => navigateDay(7, false)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div>
            <span className="day">Day </span>
            <span className="number">{7 + (currentWeek - 1) * 7}</span>
          </div>
          <button className="next-btn btn" onClick={() => navigateDay(7, true)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div>
          <div className="cheat-day-text">
            <p>GUILT-FREE DAY</p>
            <FontAwesomeIcon icon={faGrin} />
          </div>
        </div>
        <div>
          <Printer /> Print
        </div>
      </CheatDay>
    </WeekWrapper>
  );
};

export default Week;
