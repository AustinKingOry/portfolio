import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { experience } from '../constants';
const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);
  return (
    <section id='experience' className="py-10 px-6 md:p-20 bg-[#f0f1f3]/50 w-full justify-start items-center gap-20 md:inline-flex max-md:flex-col">
        <div className="flex-col justify-start items-start gap-[50px] inline-flex">
            <div className="flex-col justify-start items-start gap-6 flex">
            <h2 className="text-[#333333] text-5xl font-semibold font-['Work Sans'] leading-[56px]">What I do?</h2>
            <div className="flex-col justify-start items-start gap-4 flex">
                <p className="max-w-xl text-gray-700 text-lg font-normal font-['Work Sans'] leading-normal">I&rsquo;m all about bringing solutions to the problems affecting the human race in every way I can. Through my skills and passion, I aim to effect positive change to the lives of people all over the globe.</p>
                <p className="max-w-xl text-gray-700 text-lg font-normal font-['Work Sans'] leading-normal">With an unmatched passion for technology and entrepreneurship, I am bringing solutions to the world through software and startup ventures that have impact on a massive scale. But, that is just the surface. 😉</p>
            </div>
            </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
            <blockquote className="text-2xl font-bold text-center text-slate-900">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-violet-700 relative inline-block">
                    <span className="relative text-white p-3">Recent Experiences</span>
                </span>            
            </blockquote>
            {experience.map((inst,index)=>(
                <div key={index} className="p-6 bg-white rounded-md shadow flex-col justify-center items-start gap-2 flex border-l-4 border-[#a43dff]" data-aos="fade-up">
                    <h3 className="self-stretch text-[#132138] text-2xl font-semibold font-['Work Sans'] leading-normal">{inst.role}</h3>
                    <p className="text-sm text-purple-600 font-semibold">{inst.company} {inst.duration}</p>
                    <p className="w-full max-w-xl text-[#424e60] text-base font-normal font-['Poppins'] leading-normal">{inst.description}</p>
                </div>
            ))}
            
        </div>
        </section>
  )
}

export default Experience