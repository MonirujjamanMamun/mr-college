import { useEffect, useState } from 'react';
import Image from '../DeginLayout/Images';

const ResearchPapers = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    fetch('/researchPapers.json')
      .then((response) => response.json())
      .then((data) => setPapers(data))
      .catch((error) =>
        console.error('Error fetching research papers:', error)
      );
  }, []);

  return (
    <section className="my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Research Papers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="text-center p-4 border rounded-lg shadow-sm overflow-hidden"
          >
            <Image className="mx-auto" imgSrc={paper.image} />
            <h2 className="text-lg font-semibold">{paper.title}</h2>
            <p className="text-sm text-gray-600">Author: {paper.author}</p>
            <p className="text-sm text-gray-600">Year: {paper.year}</p>
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchPapers;
