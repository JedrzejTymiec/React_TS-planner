import { Dispatch, SetStateAction, useState } from 'react';
//Components
import ProgressBar from './ProgressBar';
import Navigation from './Navigation';
import { NavContainerWrapper } from './NavContainer.styles';
import Options from './Options';

export type ClickHandler = () => void;
type Props = {
  week: number;
  setWeek: Dispatch<SetStateAction<number>>;
};

const NavContainer: React.FC<Props> = ({ week, setWeek }) => {
  const nextWeek: ClickHandler = () => {
    week < 12 && setWeek((current) => current + 1);
  };

  const prevWeek: ClickHandler = () => {
    week > 1 && setWeek((current) => current - 1);
  };

  return (
    <NavContainerWrapper>
      <ProgressBar currentWeek={week} />
      <Navigation currentWeek={week} nextWeek={nextWeek} prevWeek={prevWeek} />
      <Options />
    </NavContainerWrapper>
  );
};

export default NavContainer;
