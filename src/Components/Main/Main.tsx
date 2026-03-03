import { courses } from '../../db/db.ts';
import { useState } from 'react';
import Slider from './Slider.tsx';

const Main = ({selector}:{selector: (name: string, tag: string) => void}) => {
  const [course] = useState(courses);
  return (
    <div className='col-span-2 h-[calc(100vh-96px)] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 rounded-md'>
      <article className='flex items-center justify-between px-10 py-5 '>
        <div className='typography bg-black p-5 rounded-2xl border border-slate-500'>
          <h2 className='text-4xl'>Savitar.dev - dasturlash kurslari</h2>
          <button
            onClick={() => selector('Kurslar' , '/courses')}
            className='py-2 px-3 mt-4 mr-2 bg-white text-slate-800 rounded-xl '
          >
            Kurslar
          </button>
          <button onClick={() => selector('Loyihalar' , '/projects')} className='py-2 px-3 mt-4 bg-white text-slate-800 rounded-xl '>
            Loyihalar
          </button>
        </div>
        <Slider />
      </article>
      <section className='grid grid-cols-3 gap-10 border-2 rounded-xl p-2'>
        {course.map(
          (course, id) =>
            id <= 5 && (
              <div
                key={course.title}
                className='bg-[#19191c] rounded-lg border border-slate-600'
              >
                <img src={course.img} className='rounded-lg' alt='Image' />
                <p className='typography text-2xl p-1 px-2'>{course.title}</p>
              </div>
            )
        )}
      </section>
    </div>
  );
};

export default Main;
