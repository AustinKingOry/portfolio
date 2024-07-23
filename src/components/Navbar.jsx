const Navbar = () => {
  return (
    <header className="bg-white shadow">
        <div className="container mx-auto max-w-7xl px-4 py-5 flex justify-between items-center">
            <h1 className="text-2xl font-['Work Sans'] font-bold">Austin King'ori</h1>
            <nav>
                <a href="#about" className="mx-2 font-['Work Sans'] font-semibold text-gray-800 hover:text-gray-900">About</a>
                <a href="#projects" className="mx-2 font-['Work Sans'] font-semibold text-gray-800 hover:text-gray-900">Projects</a>
                <a href="#resume" className="mx-2 font-['Work Sans'] font-semibold text-gray-800 hover:text-gray-900">Resume</a>
                <a href="#contact" className="mx-2 font-['Work Sans'] font-semibold text-gray-800 hover:text-gray-900">Contact</a>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
