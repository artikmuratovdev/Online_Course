
import { courses } from '../../db/db.ts';
import { useState } from 'react';

const Courses = () => {
  const [course] = useState(courses);
  return (
    <>
    <main className=' row-span-2 col-span-2'>
    <h2 className='text-3xl font-bold ml-3 my-2'>Kurslar</h2>
    <div className='overflow-y-scroll h-[calc(100vh-150px)] border-2 border-slate-400 bg-white dark:bg-slate-900 p-3 rounded-lg grid grid-cols-3 gap-10 shadow-inner'>
      {course.map((course) => (
        <div key={course.title} className=' dark:bg-[#19191c] rounded-lg border border-slate-600'>
          <img src={course.img} className='rounded-lg' alt='Image' />
          <p className='typography text-2xl p-1 px-2'>{course.title}</p>
        </div>
      ))}
    </div>
    </main>
    </>
  )
}

export default Courses