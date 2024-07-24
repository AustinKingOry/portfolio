import { profile } from '../assets/images';
import { statistics } from '../constants';
import 'animate.css';
import CLIMockup from './CLIMockup';
const Hero = () => {
	const cliCommands = [
		'git init',
	];
    return (
        <section id="intro" className="max-sm:px-6 py-16 max-w-7xl mx-auto">
            <div className="flex flex-col-reverse md:flex-row gap-4 px-4">
                <div className="flex-col justify-start items-start md:w-2/4 gap-6 inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start flex">
                        <CLIMockup commands={cliCommands} language="bash" />
                        <h1 className="text-[#132138] text-7xl font-bold font-['Work Sans'] leading-[84px] animate__animated animate__zoomInDown"><span className='text-orange-500'>Hello</span>, I&rsquo;m<br/>Austin King&rsquo;ori</h1>
                        </div>
                    </div>
                    <div className="w-fit">
                        <span className="text-[#556070] text-lg font-normal font-['Work Sans'] leading-normal">I&rsquo;m a </span>
                        <span className="text-[#132138] text-lg font-normal font-['Work Sans'] leading-normal">Tech Entrepreneur</span>
                        <span className="text-[#132138] text-lg font-normal font-['Work Sans'] leading-normal">, Software Engineer</span>
                        <span className="text-[#556070] text-lg font-normal font-['Work Sans'] leading-normal"> and </span>
                        <span className="text-[#132138] text-lg font-normal font-['Work Sans'] leading-normal">Tech Enthusiast</span>
                        <span className="text-gray-700 text-lg font-normal font-['Work Sans'] leading-normal"> based in Kenya with a passion for solving world problems through technology. I love working on backend systems but am also diving into frontend and mobile development.</span>
                    </div>
                    <a href="#contact" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Say Hello!</a>
                    <div className="bg-gray-400/50 border border-gray-300 px-5 py-4 rounded-md max-[480px]:w-full flex flex-col max-sm:divide-y-2 sm:flex-row sm:divide-x-2 divide-gray-200">
                    {statistics.map((stat,index)=>(
                        <div key={index} className="flex flex-col items-center justify-center px-3 min-w-40">
                            <p className="font-bold text-2xl text-gray-800">{stat.value}</p>
                            <span className='text-gray-700 font-medium text-sm'>{stat.label}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="sm:px-4 md:w-2/4 md:justify-center md:flex">
                    <img className="w-[400px] sm:h-[500px] rounded-[25px] shadow object-cover" src={profile}></img>
                </div>
            </div>
        </section>
    );
};
  
  export default Hero;
  