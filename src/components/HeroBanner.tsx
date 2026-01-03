import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const heroImages = [
  'https://placehold.co/1500x600/FF5733/FFFFFF', 
  'https://placehold.co/1500x600/33A1FF/FFFFFF',
  'https://placehold.co/1500x600/4CAF50/FFFFFF',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = heroImages.length;

  // Slide change logic (Auto-slide every 5 seconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [totalSlides]);

  return (
    <div className="relative w-full h-dvh max-h-[70dvh]">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${heroImages[currentIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content on top of the background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg mb-6">Find the best products at unbeatable prices.</p>
        <Link to="/shop" className="button text-sm mt-2 border-2 border-solid px-2 py-1 rounded inline-block">
          Shop Now
        </Link>
      </div>

      {/* Navigation dots (Optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'} cursor-pointer transition-all`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
