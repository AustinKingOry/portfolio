import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '../constants';
const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);
  return (
    <section id="skills" className="py-8 my-5 max-w-7xl mx-auto rounded-lg max-sm:mx-6 max-lg:px-6 max-sm:px-0">
        <blockquote className="text-3xl font-bold text-center text-slate-900">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-700 relative inline-block">
                <span className="relative text-white p-3">Look What I can do!</span>
            </span>            
        </blockquote>
        <div className="my-4 w-full flex flex-wrap justify-center gap-5 py-5 mx-auto">
            {skills.map((skill,index)=>(
            <div key={index} className="min-h-32 w-32 min-w-32 p-3 relative bg-gray-50 border border-gray-200 shadow-md rounded-md flex flex-col items-center justify-center" data-aos="fade-left">
                <img src={skill.logo} alt={skill.value.toString()} className='h-16 w-16 m-2' />
                <p className='text-xl font-medium'>{skill.value.toString()}</p>
                <span className="absolute -top-2 mx-auto bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{skill.status.toString()}</span>

            </div>
            ))}
        </div>
    </section>
  )
}

export default Skills