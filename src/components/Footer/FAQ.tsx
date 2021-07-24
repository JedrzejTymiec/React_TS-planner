import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
        consequuntur.
      </p>
      <button>
        <span>Read FAQs</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default FAQ;
