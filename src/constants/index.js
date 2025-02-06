import { C,Cpp,CSS3, Django, Docker,  Git, Go, HTML5, Javascript, Jquery, Mysql, NodeJs, Php, Postgres, Python, ReactJs, Tailwind, } from "../assets/logos";
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
    { value: `${new Date().getFullYear() - 2019} Y.`, label: 'Experience' },
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
    { value: 'Javascript', logo: Javascript, status : 'Experienced' },
    { value: 'React.js', logo: ReactJs, status : 'Experienced' },
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
        imgURL: 'https://firebasestorage.googleapis.com/v0/b/hallowed-index-404917.appspot.com/o/static%2Flogo%20white%20bg.png?alt=media&token=359396e7-4cac-4f83-b301-6e078b5faa1c',
        href: null,
        name: "Campoprime",
        description: "Campoprime is an EdTech platform that enhances tertiary education with AI-powered tools, collaborative features, and a marketplace for educational content, fostering quality learning and effective peer networking.",
        category: 'Django Rest + Supabase + React Js',
        preview: "https://www.campoprime.com",
    },
    {
        imgURL: 'https://raw.githubusercontent.com/AustinKingOry/hospillar/main/static/img/logo.jpg',
        href: "https://www.github.com/AustinKingOry/hospillar",
        name: "Hospillar",
        description: "Multipurpose hospital management system developed with Python Django. This system helps you make data-driven decisions and increase your efficiency at work using fast and secure mechanisms with real-time interactivity and projections.",
        category: 'Django Full Stack',
        preview:"https://hospillar.onrender.com/",
    },
    {
        imgURL: 'https://raw.githubusercontent.com/AustinKingOry/nike-react/main/src/assets/images/big-shoe1.png',
        href: "https://www.github.com/AustinKingOry/nike-react",
        name: "Nike Landing Page",
        description: "A clone of the Nike landing page developed with React Js and Tailwind css. Got me started with React.",
        category: 'Frontend (React Js)',
        preview:"https://nike-landing-repl.vercel.app/"
    },
    {
        imgURL: briefcase,
        href: "https://www.github.com/AustinKingOry/kejapair",
        name: "Kejapair",
        description: "Easiest way for college students to rent houses and get roommates that best suite them.",
        category: 'Django Full Stack',
        preview: null,
    },
    {
        imgURL: briefcase,
        href: "https://github.com/AustinKingOry/Cpp-Face-Recognition",
        name: "Computer Vision with OpenCV and C++",
        description: "This project demonstrates the use of OpenCV and C++ for advanced computer vision tasks. It involves image processing, feature detection, and real-time object tracking. The project highlights the efficiency and performance of C++ in handling computationally intensive vision applications.",
        category: 'C++',
        preview: null,
    },
    {
        imgURL: briefcase,
        href: "https://github.com/AustinKingOry/Python-webcam-face-recognition",
        name: "Computer Vision with OpenCV and Python",
        description: "This project leverages OpenCV and Python to implement computer vision techniques. It includes tasks such as image processing, object detection, and face recognition. The project showcases the power of computer vision in automating visual tasks, making it applicable to various real-world scenarios.",
        category: 'Python',
        preview: null,
    },
    {
        imgURL: "https://open-resume-builder.vercel.app/logo.webp",
        href: "https://github.com/AustinKingOry/resume-builder/",
        name: "Resume/CV Builder",
        description: "A user-friendly web app that simplifies resume creation. Users can easily input their details, customize sections, and generate a professional, well-structured PDF resume from their preffered templatee. The intuitive design ensures a seamless experience, making it accessible for job seekers at all levels.",
        category: 'React, Next.Js, Node.Js, Puppeteer, jsPDF',
        preview: "https://open-resume-builder.vercel.app/",
    },
    {
        imgURL: "https://metatester.vercel.app/logo.png",
        href: "https://github.com/AustinKingOry/metatester",
        name: "Meta Data Fetcher And Preview",
        description: "A lightweight web tool for testing and previewing metadata for websites. It helps developers and marketers ensure their meta tags display correctly across search engines and social media platforms. Simply input a URL or custom metadata to see how it appears in real-time.",
        category: 'React, Node.Js, Tailwind CSS',
        preview: "https://metatester.vercel.app/",
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