import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
///Style
import { DropdownWrapper } from './style/Dropdown.styles';

const Dropdown = () => {
  return (
    <DropdownWrapper>
      <li className="settings">Settings</li>
      <li className="logout">
        Logout
        <FontAwesomeIcon icon={faSignOutAlt} />
      </li>
    </DropdownWrapper>
  );
};

export default Dropdown;
