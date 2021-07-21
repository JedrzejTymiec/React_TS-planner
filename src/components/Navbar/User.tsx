import Gravatar from 'react-gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from './User.styles';

const User = () => {
  return (
    <Wrapper>
      <Gravatar email="jedrek1692@gmail.com" size={35} />
      <span>Jędrzej Tymiec</span>
      <FontAwesomeIcon icon={faAngleDown} />
    </Wrapper>
  );
};

export default User;
