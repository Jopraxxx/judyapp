function LoginForm() {
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-800">Login</h1>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
              <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-100" />
            </div>
            <button type="submit" className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default LoginForm;
  
  