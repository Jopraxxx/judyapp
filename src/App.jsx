import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-roboto">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800 font-playfair">Judy App</div>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-800 hover:text-pink-500 transition duration-300">Home</Link>
              <Link to="/products" className="text-gray-800 hover:text-pink-500 transition duration-300">Products</Link>
              <Link to="/about" className="text-gray-800 hover:text-pink-500 transition duration-300">About</Link>
              <Link to="/contact" className="text-gray-800 hover:text-pink-500 transition duration-300">Contact</Link>
              <Link to="/login" className="text-gray-800 hover:text-pink-500 transition duration-300">Login</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          © 2023 Judy App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;

