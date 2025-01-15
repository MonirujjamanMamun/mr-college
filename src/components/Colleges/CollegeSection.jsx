import { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import { useLocation } from 'react-router-dom';

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  console.log(colleges);

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const collegesToShow = isHomePage ? colleges.slice(0, 3) : colleges;

  useEffect(() => {
    fetch('/collegeData.json')
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error('Error fetching college data:', error));
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Our Featured Colleges
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collegesToShow?.map((college) => (
          <CollegeCard key={college.id} {...college} />
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
