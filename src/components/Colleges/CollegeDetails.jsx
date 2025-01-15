import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CollegeDetails = () => {
  const [colleges, setColleges] = useState([]);

  const { id } = useParams();
  const college = colleges?.find((clg) => clg.id === parseInt(id));

  //   if (!college) return <p> College not found </p>;
  useEffect(() => {
    fetch('/collegeData.json')
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error('Error fetching college data:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{college?.name}</h1>
      <img
        src={college?.image}
        alt={college?.name}
        className="w-full h-64 object-cover rounded-lg mt-4"
      />
      <p className="text-lg mt-4">
        <strong>Admission Dates:</strong> {college?.admissionDates}
      </p>
      <h2 className="text-2xl font-semibold mt-6">Events</h2>
      <ul className="list-disc list-inside mt-2">
        {college?.events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Research History</h2>
      <ul className="list-disc list-inside mt-2">
        {college?.researchHistory.map((research, index) => (
          <li key={index}>{research}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-6">Sports</h2>
      <ul className="list-disc list-inside mt-2">
        {college?.sports.map((sport, index) => (
          <li key={index}>{sport}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeDetails;
