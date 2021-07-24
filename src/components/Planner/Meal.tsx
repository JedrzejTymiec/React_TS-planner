import React from 'react';
//Types
import { Meal } from '../../state/types/days';
//Components
import CheckMeal from '../SVGComponents/CheckMeal';
//Styles
import { MealWrapper } from './style/Meal.styles';

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
