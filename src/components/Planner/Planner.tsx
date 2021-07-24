import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
//Components
import NavContainer from './NavContainer';
import Week from './Week';
//Styles
import { PlannerWrapper } from './style/Planner.styles';
import { HoursWrapper } from './style/Hours.styles';

const Planner = () => {
  const [week, setWeek] = useState<number>(7);

  const { days } = useSelector((state: State) => state.data);
  return (
    <PlannerWrapper>
      <NavContainer week={week} setWeek={setWeek} />
      <div className="body">
        <HoursWrapper>
          <div></div>
          <div>
            <p>
              <span>6:00</span>AM
            </p>
          </div>
          <div>
            <p>
              <span>9:00</span>AM
            </p>
          </div>
          <div>
            <p>
              <span>12:00</span>PM
            </p>
          </div>
          <div>
            <p>
              <span>3:00</span>PM
            </p>
          </div>
          <div>
            <p>
              <span>6:00</span>PM
            </p>
          </div>
          <div></div>
          <div className="workout">
            <p>Workout</p>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </HoursWrapper>
        <Week days={days} currentWeek={week} />
      </div>
    </PlannerWrapper>
  );
};

export default Planner;
