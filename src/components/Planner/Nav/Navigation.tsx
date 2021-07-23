import { NavigationWrappper } from './Navigation.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { ClickHandler } from './NavContainer';

type Props = {
  currentWeek: number;
  nextWeek: ClickHandler;
  prevWeek: ClickHandler;
};

const Navigation: React.FC<Props> = ({ currentWeek, prevWeek, nextWeek }) => {
  return (
    <NavigationWrappper>
      <button className="btn" onClick={prevWeek} disabled={currentWeek === 1}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h1>Week {currentWeek}</h1>
      <button className="btn" onClick={nextWeek} disabled={currentWeek === 12}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </NavigationWrappper>
  );
};

export default Navigation;
