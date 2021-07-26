import { useState, useEffect } from 'react';
import Gravatar from 'react-gravatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
//Styles
import { UserWrapper } from './style/User.styles';
//Components
import Dropdown from './Dropdown';

const User: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document
        .querySelectorAll('.planner-container, .footer-container')
        .forEach((div) => div.addEventListener('click', () => setOpen(false)));
    } else {
      document
        .querySelectorAll('.planner-container, .footer-container')
        .forEach((div) =>
          div.removeEventListener('click', () => setOpen(false)),
        );
    }
  }, [open]);

  return (
    <>
      <UserWrapper>
        <div onClick={() => setOpen(!open)}>
          <Gravatar email="jedrek1692@gmail.com" size={35} />
          <span>Jędrzej Tymiec</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        {open && <Dropdown />}
      </UserWrapper>
    </>
  );
};

export default User;
