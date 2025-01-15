import Review from './Review';

const AllReviews = () => {
  const colleges = [
    { id: 1, name: 'Green Valley College' },
    { id: 2, name: 'Blue Ridge University' },
    { id: 3, name: 'Golden State College' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">College Reviews</h1>
      {colleges.map((college) => (
        <div key={college.id} className="mt-6">
          <h2 className="text-xl font-semibold">{college.name}</h2>
          <Review collegeId={college.id} />
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
