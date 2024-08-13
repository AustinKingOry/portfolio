import { favicon } from '../assets/images';
import { socialMedia, navLinks } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
const Footer = () => {
    const [currentYear, setCurrentYear] = useState(null)
    useEffect(()=>{
        setCurrentYear(new Date().getFullYear())
    },[])
// eslint-disable-next-line no-unused-vars
  return (
    <footer className="bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={favicon} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Kings</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {navLinks.map((link,index)=>(
                <li key={index}>
                    <a href={link.href} className="hover:underline me-4 md:me-6">{link.label}</a>
                </li>
              ))}
            </ul>
        </div>
      <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {currentYear} <a href="" className="hover:underline">Austin King&rsquo;ori</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socialMedia.map((link,index)=>(
                <a key={index} href={link.href} target="_blank" className="text-gray-500 hover:text-gray-300 dark:hover:text-white">
                    <FontAwesomeIcon icon={link.icon} className='p-2' />
                    <span className="sr-only">{link.name}</span>
              </a>
            ))}
              
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer