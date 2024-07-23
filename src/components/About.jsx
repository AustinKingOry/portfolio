const About = () => {
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto bg-white rounded-lg shadow-md p-5 md:p-16">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-gray-700 mb-8">Dedicated Software Engineer with experience in achieving tangible results and cross-team collaboration...</p>
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Django</li>
                <li>React.js</li>
                <li>Python</li>
                <li>JavaScript</li>
            </ul>
        </div>
    </section>
  );
};

export default About;
