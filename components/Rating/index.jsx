import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faEmptyStar } from '@fortawesome/free-solid-svg-icons';


const Ratings = ({ rating }) => {
    return (
      <div className="rating">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
          <FontAwesomeIcon icon={index < rating ? faSolidStar : faEmptyStar} />
          </span>
        ))}
      </div>
    );
  };
  
  export default Ratings;