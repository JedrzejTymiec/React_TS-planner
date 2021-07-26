import { useState } from 'react';
import { Link } from 'react-router-dom';
//Styles
import { Wrapper } from './style/Navigation.styles';

const Navigation: React.FC = () => {
  const [active, setActive] = useState<boolean[]>([false, false, false]);

  const toggleActive = (id: number) => {
    const newState = [false, false, false];
    switch (id) {
      case 0:
        newState[0] = true;
        break;
      case 1:
        newState[1] = true;
        break;
      case 2:
        newState[2] = true;
        break;
    }
    setActive(newState);
  };

  return (
    <Wrapper>
      <ul>
        <li
          onClick={() => toggleActive(0)}
          className={active[0] ? 'active' : undefined}>
          <Link to="/">DASHBOARD</Link>
          <div className="dash"></div>
        </li>
        <li
          onClick={() => toggleActive(1)}
          className={active[1] ? 'active' : undefined}>
          <Link to="/recipes">RECIPES</Link>
          <div className="dash"></div>
        </li>
        <li
          onClick={() => toggleActive(2)}
          className={active[2] ? 'active' : undefined}>
          <Link to="/challenge">CHALLENGE</Link>
          <div className="dash"></div>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navigation;
