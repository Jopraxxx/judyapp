import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Truck, Shield } from 'lucide-react';

function LandingPage() {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-pink-500" />,
      title: "Wide Selection",
      description: "Explore our curated collection of premium products"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Quality Assured",
      description: "All products are tested and verified by experts"
    },
    {
      icon: <Truck className="w-8 h-8 text-pink-500" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep"
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      title: "Secure Shopping",
      description: "100% secure payment and customer protection"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-gray-800">
            Welcome to My Store
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover amazing products at great prices! We bring you the finest selection of products, 
            carefully chosen for quality and value.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 font-playfair text-gray-800">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-playfair">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="bg-pink-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair text-gray-800">
            Ready to Start Shopping?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our products.
            Experience the difference today!
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

