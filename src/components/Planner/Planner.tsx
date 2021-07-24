import NavContainer from './Nav/NavContainer';
import { PlannerWrapper } from './Planner.styles';
import { PlannerBodyWrapper } from './PlanerBodyWrapper';
import Week from './Week';
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Planner = () => {
  const [week, setWeek] = useState<number>(7);

  const { days } = useSelector((state: State) => state.data);
  return (
    <PlannerWrapper>
      <NavContainer week={week} setWeek={setWeek} />
      <PlannerBodyWrapper>
        <div className="hours">
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
        </div>
        <Week days={days} currentWeek={week} />
      </PlannerBodyWrapper>
    </PlannerWrapper>
  );
};

export default Planner;
