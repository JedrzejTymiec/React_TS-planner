import { Wrapper } from './Navbar.styles';
//Components
import Navigation from './Navigation';
import User from './User';

const Navbar = () => {
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
