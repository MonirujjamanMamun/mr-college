import CollegeSection from '../../components/Colleges/CollegeSection';

const Colleges = () => {
  console.log('Colleges page', window.location.pathname);
  return (
    <div>
      <CollegeSection />
    </div>
  );
};

export default Colleges;
