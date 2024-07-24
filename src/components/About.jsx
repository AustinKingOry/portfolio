import AOS from 'aos';
import 'aos/dist/aos.css';
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { profile2 } from '../assets/images';
import { resume } from '../assets/docs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
const About = () => {
  const [profileImg, setProfileImg] = useState(profile2);
  useEffect(() => {
    AOS.init({ duration: 300 });
}, []);
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto bg-white rounded-lg shadow-md p-5 md:p-16 my-4 max-sm:mx-6 max-[480px]:mx-4 max-lg:mx-6">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 px-4">
                <div className="px-4 md:w-2/4 md:justify-start md:flex">
                    <img className="w-[350px] h-[350px] rounded-xl shadow object-cover" src={profileImg} data-aos="zoom-in"></img>
                </div>
                <div className="flex-col justify-center items-start md:w-3/4 gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                      <h2 className="text-[#132138] text-3xl font-semibold font-['Work Sans'] leading-[50px]">I am a Full Stack Web Developer</h2>
                    </div>
                    <div className="max-w-xl">
                      <p className="text-[#556070] text-sm font-normal font-['Work Sans'] leading-normal mb-3">My curiousity and adventures in the land of technology have lead me to the path of web development, with a special interest in backend systems. But don&rsquo;t let this fool you, I&rsquo;m almost as good at frontend too. 😅
                      </p>
                      <p className="text-[#556070] text-sm font-normal font-['Work Sans'] leading-normal">I&rsquo;m also exploring other fields such as data science and machine learning, mobile development, DevOps and embedded systems.</p>
                    </div>
                    <div className="w-full flex flex-row gap-3 max-sm:flex-col">
                      <a href="https://github.com/AustinKingOry?tab=repositories" target='_blank' className="max-sm:w-fit inline-flex items-center gap-2 focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900">
                        Github Projects
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </a>
                      <a href={resume} download={resume} className="max-sm:w-fit inline-flex items-center gap-2 focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900">
                        <FontAwesomeIcon icon={faCloudArrowDown} />
                        Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
