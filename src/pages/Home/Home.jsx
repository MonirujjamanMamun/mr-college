import CollegeSection from '../../components/Colleges/CollegeSection';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import ResearchPapers from '../../components/ResearchPapers/ResearchPapers';
import AllReviews from '../../components/Reviews/AllReviews';

const Home = () => {
  return (
    <div className="container mx-auto">
      <CollegeSection />
      <ImageGallery />
      <ResearchPapers />
      <AllReviews />
    </div>
  );
};

export default Home;
