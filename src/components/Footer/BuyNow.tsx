import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const BuyNow = () => {
  return (
    <div className="footer-section buy-now">
      <div>
        <h1>Running out of products?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, illum.
        </p>
      </div>
      <button>
        <span>Buy now</span> <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default BuyNow;
