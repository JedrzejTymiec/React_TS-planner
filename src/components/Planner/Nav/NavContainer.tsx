import { useState } from 'react';
//Components
import ProgressBar from './ProgressBar';
import Navigation from './Navigation';
import { NavContainerWrapper } from './NavContainer.styles';
import Options from './Options';

export type ClickHandler = () => void;

const NavContainer: React.FC = () => {
  const [week, setWeek] = useState<number>(4);

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
