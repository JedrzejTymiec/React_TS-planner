import React from 'react';
import { Day } from '../../state/types/days';
import MealComponent from './Meal';
import Dumbell from '../SVGComponents/Dumbell';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { daysActions } from '../../state';
import { State } from '../../state/reducers';

type Props = {
  day: Day;
  currentWeek: number;
};

const DayComponent: React.FC<Props> = ({
  currentWeek,
  day: { meals, training, carb, id },
}) => {
  const dispatch = useDispatch();
  const { newData } = bindActionCreators(daysActions, dispatch);
  const { days }: { days: Day[] } = useSelector((state: State) => state.data);

  const toggleTrainig = () => {
    days[id - 1].training = !days[id - 1].training;
    newData(days);
  };
  return (
    <div className="day">
      <div className="day-number">
        <span>Day {id + (currentWeek - 1) * 7}</span>
      </div>
      {meals.map((meal) => (
        <MealComponent key={meal.id} meal={meal} />
      ))}
      <div>
        <span>{carb}-carb</span>
      </div>
      <div onClick={toggleTrainig}>
        <Dumbell training={training} />
        {training && <FontAwesomeIcon icon={faCheck} color="#ff801a" />}
      </div>
    </div>
  );
};

export default DayComponent;
