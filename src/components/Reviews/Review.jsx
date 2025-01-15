import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Review = ({ collegeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Mock fetching reviews data
    const fetchReviews = async () => {
      const data = [
        {
          collegeId: 1,
          reviews: [
            {
              userName: 'Alice Johnson',
              rating: 5,
              feedback:
                'Excellent facilities and great faculty. Highly recommend!',
            },
            {
              userName: 'Bob Smith',
              rating: 5,
              feedback: 'Good overall experience but needs improvement.',
            },
          ],
        },
        {
          collegeId: 2,
          reviews: [
            {
              userName: 'Charlie Brown',
              rating: 3,
              feedback:
                'Average college with limited extracurricular activities.',
            },
          ],
        },
        {
          collegeId: 3,
          reviews: [],
        },
      ];

      const collegeReviews =
        data.find((item) => item.collegeId === collegeId)?.reviews || [];
      setReviews(collegeReviews);
    };

    fetchReviews();
  }, [collegeId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {reviews.map((review, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{review.userName}</h3>
                <span className="ml-4 text-yellow-500">
                  {'⭐'.repeat(review.rating)}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{review.feedback}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-600">
          No reviews available for this college.
        </p>
      )}
    </div>
  );
};

Review.propTypes = {
  collegeId: PropTypes.node,
};
export default Review;
