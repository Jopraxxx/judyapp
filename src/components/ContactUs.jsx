function ContactUs() {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-800">Contact Us</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100"></textarea>
            </div>
            <button type="submit" className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ContactUs;
  
  