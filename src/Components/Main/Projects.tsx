import { projects } from '../../db/db';


const Projects = () => {
  return (
    <div className='py-3 grid grid-cols-3 gap-5'>
      {projects.map((project) => (
        <div key={project.title} className='rounded-lg dark:bg-black p-2 border border-black'>
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
