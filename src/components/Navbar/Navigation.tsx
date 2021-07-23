import { Wrapper } from './Navigation.styles';

const Navigation: React.FC = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          DASHBOARD<div className="dash"></div>
        </li>
        <li>
          RECIPES<div className="dash"></div>
        </li>
        <li>
          CHALLENGE<div className="dash"></div>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navigation;
