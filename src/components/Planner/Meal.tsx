import React from 'react';
import { Meal } from '../../state/types/days';
import { MealWrapper } from './Meal.styles';
import CheckMeal from '../SVGComponents/CheckMeal';

type Props = {
  meal: Meal;
  toggle: (mealId: number) => void;
};

const MealComponent: React.FC<Props> = ({
  toggle,
  meal: { name, eaten, id },
}) => {
  return (
    <MealWrapper onDoubleClick={() => toggle(id)}>
      <p>{name}</p>
      {eaten && <CheckMeal />}
    </MealWrapper>
  );
};

export default MealComponent;
