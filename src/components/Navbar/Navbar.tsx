//Styles
import { Wrapper } from './style/Navbar.styles';
//Components
import Navigation from './Navigation';
import User from './User';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <Navigation />
        <User />
      </div>
    </Wrapper>
  );
};

export default Navbar;
