import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CollegeCard = ({
  id,
  image,
  name,
  admissionDates,
  events,
  researchHistory,
  sports,
}) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-sm text-gray-600 mt-2">
        Admission Dates: {admissionDates}
      </p>
      <ul className="mt-2 text-sm">
        <li>
          <strong>Events:</strong> {events.join(', ')}
        </li>
        <li>
          <strong>Research:</strong> {researchHistory.join(', ')}
        </li>
        <li>
          <strong>Sports:</strong> {sports.join(', ')}
        </li>
      </ul>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
        onClick={() => navigate(`/colleges/${id}`)}
      >
        Details
      </button>
    </div>
  );
};

CollegeCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  admissionDates: PropTypes.string,
  events: PropTypes.array,
  researchHistory: PropTypes.array,
  sports: PropTypes.array,
};

export default CollegeCard;
