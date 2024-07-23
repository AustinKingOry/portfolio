const Resume = () => {
    return (
        <section id="resume" className="py-16 max-w-7xl mx-auto">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8">Resume</h2>
                <a href="resume.pdf" download className="text-blue-500 hover:underline mb-8 block">Download Resume</a>
                <h3 className="text-2xl font-semibold mb-4">Experience</h3>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>Full Stack Software Developer, Campoprime Labs, Nairobi (October 2023 - Present)</li>
                    <li>Full Stack Web Developer, Hyddroo Harvest, Nairobi (July 2023 - November 2023)</li>
                    <li>Co-founder and Full Stack Web Developer, Sokomotives, Nairobi (August 2022 - December 2023)</li>
                    <li>Software Developer Intern, Bingwa Afya Hospital, Nairobi (January 2022 - November 2022)</li>
                </ul>
            </div>
        </section>
    );
  };
  
  export default Resume;
  