import { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/gallery.json')
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching gallery data:', error));
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Graduate Group Photos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="rounded-lg p-4 overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.description}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-700">{image.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
