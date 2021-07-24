import React, { useState } from 'react';
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
  toggle: (id: number) => void;
  active: boolean;
};

const DayComponent: React.FC<Props> = ({
  currentWeek,
  toggle,
  active,
  day: { meals, training, carb, id },
}) => {
  const dispatch = useDispatch();
  const { newData } = bindActionCreators(daysActions, dispatch);
  const { days }: { days: Day[] } = useSelector((state: State) => state.data);

  const toggleTrainig = () => {
    days[id - 1].training = !days[id - 1].training;
    newData(days);
  };

  const toggleMeal = (mealId: number) => {
    days[id - 1].meals[mealId - 5 * (id - 1) - 1].eaten =
      !days[id - 1].meals[mealId - 5 * (id - 1) - 1].eaten;
    newData(days);
  };

  return (
    <div className={active ? 'day active' : 'day'} onClick={() => toggle(id)}>
      <div className="day-number">
        <span>Day {id + (currentWeek - 1) * 7}</span>
      </div>
      {meals.map((meal) => (
        <MealComponent key={meal.id} meal={meal} toggle={toggleMeal} />
      ))}
      <div>
        <span>{carb}-carb</span>
      </div>
      <div onDoubleClick={toggleTrainig}>
        <Dumbell training={training} />
        {training && <FontAwesomeIcon icon={faCheck} color="#ff801a" />}
      </div>
    </div>
  );
};

export default DayComponent;
