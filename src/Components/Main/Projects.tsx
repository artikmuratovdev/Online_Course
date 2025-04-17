import { projects } from '../../db/db';
import '../../../public/download.png';
import '../../../public/download (1).png';
import '../../../public/download (2).png';
import '../../../public/download (3).png';

const Projects = () => {
  return (
    <div className='py-3 grid grid-cols-3 gap-5'>
      {projects.map((project) => (
        <div key={project.title} className='rounded-lg bg-black p-2'>
          <a href={project.link}>
            <img
              src={project.img}
              className='w-full rounded-lg'
              alt={project.title}
            />
            <p className='text-2xl font-bold p-2'>{project.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
