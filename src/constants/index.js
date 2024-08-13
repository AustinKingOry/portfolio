import { C,Cpp,CSS3, Django, Docker,  Git, Go, HTML5, Javascript, Jquery, Mysql, NodeJs, Php, Postgres, Python, ReactJs, Rust, Tailwind, } from "../assets/logos";
import { faTwitter, faLinkedin, faGithub,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { briefcase } from "../assets/images"


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "What I do" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];


export const statistics = [
    { value: '6 Y.', label: 'Experience' },
    { value: '80+', label: 'Projects' },
    { value: '50+', label: 'Clients' },
];

export const contacts = [
    { value: 'tel:+254112685851', label:"+254112685851", title: 'Call Me', icon: faPhone },
    { value: 'https://www.linkedin.com/in/austin-kings/', label:"Austin Kings", title: 'LinkedIn', icon: faLinkedin },
    { value: 'https://github.com/AustinKingOry', label: 'IamKingOry', title:"Github", icon: faGithub },
    { value: 'https://www.twitter.com/IamKingOry', label:"IamKingOry", title: 'X', icon: faTwitter },
    { value: 'mailto:kingoriaustin01@gmail.com', label:"kingoriaustin01@gmail.com", title: 'Email', icon: faEnvelopeOpen },
];

export const skills = [
    { value: 'Python', logo: Python, status : 'Pro' },
    { value: 'Django', logo: Django, status : 'Pro' },
    { value: 'PHP', logo: Php, status : 'Experienced' },
    { value: 'C', logo: C, status : 'Experienced' },
    { value: 'C++', logo: Cpp, status : 'Experienced' },
    { value: 'Go', logo: Go, status : 'Learning' },
    { value: 'Rust', logo: Rust, status : 'Learning' },
    { value: 'Javascript', logo: Javascript, status : 'Experienced' },
    { value: 'React.js', logo: ReactJs, status : 'Mid' },
    { value: 'Node JS', logo: NodeJs, status : 'Mid' },
    { value: 'Jquery', logo: Jquery, status : 'Experienced' },
    { value: 'Docker', logo: Docker, status : 'Learning' },
    { value: 'HTML5', logo: HTML5, status : 'Pro' },
    { value: 'CSS3', logo: CSS3, status : 'Experienced' },
    { value: 'Tailwind', logo: Tailwind, status : 'Experienced' },
    { value: 'MySQL', logo: Mysql, status : 'Experienced' },
    { value: 'Postgresql', logo: Postgres, status : 'Experienced' },
    { value: 'Git', logo: Git, status : 'Mid' },
];

export const projects = [
    {
        imgURL: 'https://avatars.githubusercontent.com/u/172502739?s=88&v=4',
        href: "https://www.campoprime.com",
        name: "Campoprime",
        description: "Campoprime is an EdTech platform that enhances tertiary education with AI-powered tools, collaborative features, and a marketplace for educational content, fostering quality learning and effective peer networking.",
        category: 'Django Rest + React Js',
    },
    {
        imgURL: 'https://raw.githubusercontent.com/AustinKingOry/hospillar/main/static/img/logo.jpg',
        href: "https://www.github.com/AustinKingOry/hospillar",
        name: "Hospillar",
        description: "Multipurpose hospital management system developed with Python Django. This system helps you make data-driven decisions and increase your efficiency at work using fast and secure mechanisms with real-time interactivity and projections.",
        category: 'Django Full Stack',
    },
    {
        imgURL: 'https://raw.githubusercontent.com/AustinKingOry/nike-react/main/src/assets/images/big-shoe1.png',
        href: "https://www.github.com/AustinKingOry/nike-react",
        name: "Nike Landing Page",
        description: "A clone of the Nike landing page developed with React Js and Tailwind css.",
        category: 'Frontend (React Js)',
    },
    {
        imgURL: briefcase,
        href: "https://www.github.com/AustinKingOry/kejapair",
        name: "Kejapair",
        description: "Easiest way for college students to rent houses and get roommates that best suite them.",
        category: 'Django Full Stack',
    },
    {
        imgURL: briefcase,
        href: "https://github.com/AustinKingOry/Cpp-Face-Recognition",
        name: "Computer Vision with OpenCV and C++",
        description: "This project demonstrates the use of OpenCV and C++ for advanced computer vision tasks. It involves image processing, feature detection, and real-time object tracking. The project highlights the efficiency and performance of C++ in handling computationally intensive vision applications.",
        category: 'C++',
    },
    {
        imgURL: briefcase,
        href: "https://github.com/AustinKingOry/Python-webcam-face-recognition",
        name: "Computer Vision with OpenCV and Python",
        description: "This project leverages OpenCV and Python to implement computer vision techniques. It includes tasks such as image processing, object detection, and face recognition. The project showcases the power of computer vision in automating visual tasks, making it applicable to various real-world scenarios.",
        category: 'Python',
    },
];

export const experience = [
    {role:'Founder & CEO',company:"Campoprime Labs",description:"Campoprime is an EdTech platform that enhances tertiary education with AI-powered tools, collaborative features, and a marketplace for educational content, fostering quality learning and effective peer networking. I am the head of product developement.",duration:"(working here)"},
    {role:'Software Engineer',company:"Hyddroo Harvest",description:"Designed, developed and tested the company's web app in both backend and frontend. Conducted UI/UX and API tests to achieve cost-effective measures and optimise performance."},
    {role:'Co-Founder & C.T.O',company:"Sokomotives Kenya",description:"Developed a full stack web application from scratch, including back-end services, front-end interface, and database."},
]

export const socialMedia = [
    { href: 'https://web.facebook.com/kings.smart.148/', icon: faFacebook, name: "Facebook" },
    { href: 'https://x.com/IamKingOry', icon: faTwitter, name: "X (fka Twitter)" },
    { href: 'https://www.linkedin.com/in/austin-kings/', icon: faLinkedin, name: "LinkedIn" },
    { href: 'https://www.instagram.com/the_white_hat_ke/', icon: faInstagram, name: "Instagram" },
    { href: 'https://github.com/AustinKingOry', icon: faGithub, name: "Github" },
];