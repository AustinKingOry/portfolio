import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contacts } from '../constants';
import CLIMockup from './CLIMockup';
const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);
	const cliCommands = [
		'git clone https://github.com/AustinKingOry/portfolio.git',
	];
  return (
    <section id="contact" className="py-16 max-w-7xl mx-auto max-sm:mx-6 max-lg:px-6 max-sm:px-0">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg p-8 gap-8 max-sm:px-4 overflow-hidden bg-white" data-aos="fade-up">
                <div className="sm:p-4 space-y-4">
                    <div className="min-h-[114px] flex-col justify-start items-start gap-4 flex">
                        <h3 className="self-stretch text-[#132138] text-[38px] font-semibold font-['Work Sans'] leading-[50px]">Contact Me</h3>
                        <p className="self-stretch text-[#87909d] text-lg font-normal font-['Work Sans'] leading-normal">I&rsquo;m on all social media platforms out there. But you can reach me through these main ones.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {contacts.map((contact,index)=>(
                        <div key={index} className="min-w-64 w-fit p-6 bg-white rounded-[10px] shadow justify-start items-center gap-[13px] inline-flex">
                            <div className="p-3 bg-gray-200 rounded justify-start items-start gap-2.5 flex">
                                <div className="w-6 h-6 pl-[3.51px] pr-[3.53px] pt-0.5 pb-[1.94px] justify-center items-center flex">
                                    <FontAwesomeIcon icon={contact.icon} className='p-2' />
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-1 inline-flex">
                                <p className="text-[#424e60] text-sm font-normal font-['Work Sans'] leading-tight">{contact.title}:</p>
                                <a href={contact.value} target="_blank" className="text-[#132138] text-base font-medium font-['Work Sans'] leading-normal">{contact.label}</a>
                            </div>
                        </div>
                        ))}
                    </div>                    
                </div>
                <form action="submit_form.php" method="post" className="bg-gray-50 p-6 rounded-lg shadow md:mt-8">
                    <p className="mb-2 self-stretch text-gray-600 text-base font-normal font-['Work Sans'] leading-normal">Would you like to discuss an idea you have? Or to hire me? Get in touch with me instantly by filling in this form.</p>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                </form>
            </div>
        </div>
        <div className="w-full my-3 flex justify-center">
            <CLIMockup commands={cliCommands} language="bash" />
        </div>
    </section>
  );
};

export default Contact;
