import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Android from '../SVGComponents/Android';

const MobileApp = () => {
  return (
    <div className="footer-section mobile">
      <div>
        <h1>Bod•ē Trainer in your poket</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
          illo.
        </p>
      </div>
      <div className="buttons-container">
        <button>
          <FontAwesomeIcon icon={faApple} className="apple" />
          <span>iOS</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button>
          <Android />
          <span>Android</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default MobileApp;
