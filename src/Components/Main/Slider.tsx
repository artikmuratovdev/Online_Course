import { useEffect, useState } from 'react';

const slides = [
  'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo02zXPyZ51xPWtVAgLib0hZoQDvKECnGHuYdBj&w=1920&q=75&dpl=dpl_9BY4WfzXujZSdQGVHZ8qhj3KUjH9w&s=',
  'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo06tUZZyJ3zGAQDL8Fg0WfZjoJNTunX9qViPby&w=1920&q=75&dpl=dpl_9BY4WfzXujZSdQGVHZ8qhj3KUjH9w&s=',
  'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0pu6T6XIV0jo2XA16Ydy4rSfwLIiRxv98gOuk&w=1920&q=75&dpl=dpl_9BY4WfzXujZSdQGVHZ8qhj3KUjH9w&s=',
  'https://www.sammi.ac/_next/image?url=https%3A%2F%2Fqk9g5hsrut.ufs.sh%2Ff%2Fxu965PmyvPo0hd5vTF0SS4EXWoPYTwZe8J6lmbK01atBMDu9&w=1920&q=75&dpl=dpl_9BY4WfzXujZSdQGVHZ8qhj3KUjH9w&s=',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-106 h-60 overflow-hidden rounded-lg bg-black">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-108 h-60 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;


