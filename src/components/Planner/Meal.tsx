import React from 'react';
import shakePic from '../../images/lyxshake-vanilla-2021.png';
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
    <MealWrapper onDoubleClick={() => toggle(id)} className="meal">
      {eaten && <CheckMeal />}
      <p>{name}</p>
      {name === 'Bod•ē Shake' && <img src={shakePic} alt="shake" />}
    </MealWrapper>
  );
};

export default MealComponent;
