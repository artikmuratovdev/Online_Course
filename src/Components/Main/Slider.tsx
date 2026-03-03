import { useEffect, useState } from 'react';
import { courses } from '../../db/db';

const slides = courses.slice(0,4);

const Slider = () => {
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
            src={src.img}
            alt={`Slide ${index}`}
            className="w-108 h-60 object-contain shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;


