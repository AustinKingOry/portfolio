const Projects = () => {
  return (
    <section id="projects" className="bg-whited py-16 max-w-7xl mx-auto">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="project bg-gray-50 p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-semibold mb-4">Campoprime Labs</h3>
                    <p className="text-lg text-gray-700 mb-4">Developed a microservices architecture, created a RESTful API, and worked on backend services using Django...</p>
                    <a href="https://github.com/AustinKingOry" className="text-blue-500 hover:underline">GitHub Repository</a>
                </div>
                <div className="project bg-gray-50 p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-semibold mb-4">Hyddroo Harvest</h3>
                    <p className="text-lg text-gray-700 mb-4">Focused on backend development using Django, refined and upgraded existing software, designed and developed software systems...</p>
                    <a href="https://github.com/AustinKingOry" className="text-blue-500 hover:underline">GitHub Repository</a>
                </div>
                <div className="project bg-gray-50 p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-semibold mb-4">Sokomotives</h3>
                    <p className="text-lg text-gray-700 mb-4">Co-founded and led the development of an online car dealership platform. Handled backend development in PHP and frontend in JavaScript, HTML, CSS, and Bootstrap...</p>
                    <a href="https://github.com/AustinKingOry" className="text-blue-500 hover:underline">GitHub Repository</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Projects;
