const Contact = () => {
  return (
    <section id="contact" className="bg-whited py-16 max-w-7xl mx-auto">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <form action="submit_form.php" method="post" className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name:</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded mt-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded mt-2"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message:</label>
                    <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded mt-2"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
            </form>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h3>
            <p className="text-lg text-gray-700">Email: <a href="mailto:kingoriaustin01@gmail.com" className="text-blue-500 hover:underline">kingoriaustin01@gmail.com</a></p>
            <p className="text-lg text-gray-700">Phone: +254112685851</p>
            <p className="text-lg text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/austin-kings/" className="text-blue-500 hover:underline">Austin Kings</a></p>
            <p className="text-lg text-gray-700">Twitter: <a href="https://www.twitter.com/IamKingOry" className="text-blue-500 hover:underline">IamKingOry</a></p>
        </div>
    </section>
  );
};

export default Contact;
