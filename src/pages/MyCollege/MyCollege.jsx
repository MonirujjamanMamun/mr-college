import { useState } from 'react';

const MyCollege = () => {
  const [reviews, setReviews] = useState([]);
  const submission = {
    collegeName: 'Green Valley College',
    candidateName: 'John Doe',
    subject: 'Computer Science',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Elm Street, City',
    dateOfBirth: '2000-01-01',
    image: 'https://i.ibb.co.com/zQFwnKD/download.jpg',
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      rating: e.target.rating.value,
      feedback: e.target.feedback.value,
    };
    setReviews([...reviews, newReview]);
    console.log('New Review:', newReview);
    // Update home page reviews (mock)
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg my-5 w-3/5">
        <h1 className="text-3xl text-center font-bold">My College</h1>
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-semibold">{submission.collegeName}</h2>
          <img
            src={submission.image}
            alt={submission.candidateName}
            className="w-32 h-32 rounded-lg mt-2 mx-auto"
          />
          <p>Candidate: {submission.candidateName}</p>
          <p>Subject: {submission.subject}</p>
          <p>Email: {submission.email}</p>
          <p>Phone: {submission.phone}</p>
          <p>Address: {submission.address}</p>
          <p>Date of Birth: {submission.dateOfBirth}</p>
        </div>
        <form onSubmit={handleReviewSubmit} className="mt-4">
          <input
            type="number"
            name="rating"
            placeholder="Rating (1-5)"
            className="block mb-2 border rounded px-3 py-2 w-full"
            required
          />
          <textarea
            name="feedback"
            placeholder="Write a review"
            className="block mb-2 border rounded px-3 py-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded w-full"
          >
            Submit Review
          </button>
        </form>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Reviews</h3>
          {reviews.map((review, index) => (
            <div key={index} className="mt-2">
              <p>Rating: {review.rating}</p>
              <p>{review.feedback}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
