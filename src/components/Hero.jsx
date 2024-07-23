/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { profile } from '../assets/images';
import { statistics } from '../constants';
const Hero = () => {
    const [profileImg, setProfileImg] = useState(profile);
    return (
        <section id="intro" className="bg-whitfe py-16 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 px-4">
                <div className="flex-col justify-start items-start md:w-2/4 gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start flex">
                        <h1 className="text-[#132138] text-7xl font-semibold font-['Work Sans'] leading-[84px]">Hello, I&rsquo;m<br/>Austin King&rsquo;ori</h1>
                        </div>
                    </div>
                    <div className="w-fit">
                        <span className="text-[#556070] text-lg font-normal font-['Work Sans'] leading-normal">I&rsquo;m a Freelance </span>
                        <span className="text-[#132138] text-lg font-normal font-['Work Sans'] leading-normal">UI/UX Designer</span>
                        <span className="text-[#556070] text-lg font-normal font-['Work Sans'] leading-normal"> and </span>
                        <span className="text-[#132138] text-lg font-normal font-['Work Sans'] leading-normal">Developer</span>
                        <span className="text-[#556070] text-lg font-normal font-['Work Sans'] leading-normal"> based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</span>
                    </div>
                    <button type="button" className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900">Say Hello!</button>
                    <div className="bg-gray-400/50 border border-gray-200 px-5 py-4 rounded-md flex flex-row divide-x-2 divide-gray-100">
                    {statistics.map((stat,index)=>(
                        <div key={index} className="flex flex-col items-center justify-center px-3 min-w-40">
                            <p className="font-bold text-xl text-gray-800">{stat.value}</p>
                            <span className='text-gray-600 text-sm'>{stat.label}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="px-4 md:w-2/4 md:justify-center md:flex">
                    <img className="w-[400px] h-[500px] rounded-[25px] shadow object-cover" src={profileImg}></img>
                </div>
            </div>
        </section>
    );
};
  
  export default Hero;
  