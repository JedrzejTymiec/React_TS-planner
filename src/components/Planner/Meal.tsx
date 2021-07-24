import React from 'react';
import { Meal } from '../../state/types/days';
import { MealWrapper } from './Meal.styles';

type Props = {
  meal: Meal;
};

const MealComponent: React.FC<Props> = ({ meal: { name, eaten } }) => {
  return (
    <MealWrapper>
      <p>{name}</p>
    </MealWrapper>
  );
};

export default MealComponent;
