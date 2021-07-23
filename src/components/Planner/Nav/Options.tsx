import { OptionsWrapper } from './Options.styles';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../../../state/reducers';
import { bindActionCreators } from 'redux';
import { optionsActions } from '../../../state';
//Components
import Broccoli from './OptionsIcons/Broccoli';
import Cheese from './OptionsIcons/Cheese';
import Meat from './OptionsIcons/Meat';
import Fish from './OptionsIcons/Fish';
import Chicken from './OptionsIcons/Chicken';

export type Toggle = () => void;

const Options = () => {
  const dispatch = useDispatch();

  const { newOptions } = bindActionCreators(optionsActions, dispatch);
  const { options } = useSelector((state: State) => state.options);

  const toggleVeg: Toggle = () => {
    options.vegetables = !options.vegetables;
    newOptions(options);
  };

  const toggleCheese: Toggle = () => {
    options.cheese = !options.cheese;
    newOptions(options);
  };

  const toggleMeat: Toggle = () => {
    options.meat = !options.meat;
    newOptions(options);
  };

  const toggleFish: Toggle = () => {
    options.fish = !options.fish;
    newOptions(options);
  };

  const toggleChicken: Toggle = () => {
    options.chicken = !options.chicken;
    newOptions(options);
  };

  return (
    <OptionsWrapper>
      <div className="options-container">
        <h5>Select your protein options</h5>
        <div className="icons">
          <Broccoli
            selected={options && options.vegetables}
            toggle={toggleVeg}
          />
          <Cheese selected={options && options.cheese} toggle={toggleCheese} />
          <Meat selected={options && options.meat} toggle={toggleMeat} />
          <Fish selected={options && options.fish} toggle={toggleFish} />
          <Chicken
            selected={options && options.chicken}
            toggle={toggleChicken}
          />
        </div>
      </div>
    </OptionsWrapper>
  );
};

export default Options;
