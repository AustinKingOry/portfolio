import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);
  return (
    <section id="projects" className="py-8 max-w-7xl mx-auto max-sm:mx-6 max-lg:px-6 max-sm:px-0">
        <div className="container mx-auto">
            <h2 className="text-3xl text-white font-bold mb-8 text-center">Favorite Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index)=>(
                    <div key={index} className="project bg-gray-50 overflow-hidden rounded-lg shadow flex flex-col max-w-96" data-aos="fade-up">
                    <div className="max-w-96 h-fit p-2 flex flex-row gap-1.5 bg-gray-100">
                        <img src={project.imgURL} alt={project.name} className='w-24 h-24 bg-gray-50 object-contain' />
                        <div className="flex flex-col p-2 gap-1.5">
                            <h3 className="text-lg font-semibold break-words">{project.name}</h3>
                            <p className='text-xs text-purple-700 font-medium'>{project.category}</p>
                        </div>
                    </div>
                    <div className="h-full p-4 flex flex-col justify-between gap-2">
                        <p className="text-base text-gray-700">{project.description}</p>
                        <a href={project.href} target="_blank" className="inline-flex gap-2 items-center w-fit text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center my-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                        Check it out 
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
                ))}
                
            </div>
            <div className="w-full p-2 inline-flex items-center justify-center">
                <a href="https://github.com/AustinKingOry?tab=repositories" target="_blank" className="inline-flex gap-2 items-center w-fit mx-auto bg-purple-600 text-white border border-purple-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 text-center my-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
                    More Projects 
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </div>
        </div>
    </section>
  );
};

export default Projects;
