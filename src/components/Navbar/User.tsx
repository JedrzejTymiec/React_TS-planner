import Gravatar from 'react-gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const User = () => {
  return (
    <div>
      <Gravatar email="jedrek1692@gmail.com" size={35} />
      <span>Jędrzej Tymiec</span>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default User;
