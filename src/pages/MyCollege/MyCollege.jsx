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
    image: 'https://via.placeholder.com/150',
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
    <div className="p-6">
      <h1 className="text-3xl font-bold">My College</h1>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">{submission.collegeName}</h2>
        <img
          src={submission.image}
          alt={submission.candidateName}
          className="w-32 h-32 rounded-lg mt-2"
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
          className="block mb-2"
          required
        />
        <textarea
          name="feedback"
          placeholder="Write a review"
          className="block mb-2"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
