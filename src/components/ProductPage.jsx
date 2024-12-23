import { useState, useEffect } from 'react';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulating API call with the provided data
    const apiData = [
      {
        title: "30 Best Skincare Products of 2024, Tested by Experts",
        imageUrl: "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
        source: "Good Housekeeping",
        link: "https://www.goodhousekeeping.com/beauty/anti-aging/g28135730/best-skincare-products/",
      },
      {
        title: "20 Trending Products and Things To Sell Online (2025) - Shopify",
        imageUrl: "https://cdn.shopify.com/s/files/1/0070/7032/articles/trending-products_7ed711c4-206c-4b41-a321-711785f3a917.png?v=1729280622",
        source: "Shopify",
        link: "https://www.shopify.com/blog/trending-products",
      },
      {
        title: "41 best products of the past year, according to 40,000 Americans",
        imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg",
        source: "NBC News",
        link: "https://www.nbcnews.com/select/shopping/best-products-year-ncna1258128",
      },
      {
        title: "Allure Editors' 30 Favorite Skin, Hair, and Makeup Products",
        imageUrl: "http://media.allure.com/photos/6037edc61f27f5c03729d305/master/pass/AL-LEDE.jpg",
        source: "Allure",
        link: "https://www.allure.com/story/allure-30th-anniversary-favorite-makeup-skin-hair-products",
      },
      {
        title: "Product Mix - Overview, Dimensions and Practical Example",
        imageUrl: "https://cdn.corporatefinanceinstitute.com/assets/product-mix3.jpeg",
        source: "Corporate Finance Institute",
        link: "https://corporatefinanceinstitute.com/resources/management/product-mix/",
      },
      {
        title: "Product Drops: 8 Strategies, 5 Benefits & 27 Examples (2024)",
        imageUrl: "https://queue-it.com/media/ppcp1twv/product-drop.jpg",
        source: "Queue-it",
        link: "https://queue-it.com/blog/product-drop/",
      },
      {
        title: "Largest Consumer Survey of Its Kind Reveals Most Innovative Products",
        imageUrl: "https://photos.prnewswire.com/prnfull/20160208/330821",
        source: "PR Newswire",
        link: "https://www.prnewswire.com/news-releases/largest-consumer-survey-of-its-kind-reveals-most-innovative-products-of-2016-300218221.html",
      },
      {
        title: "83 Best Amazon Beauty Products 2024, Tested & Reviewed",
        imageUrl: "https://wwd.com/wp-content/uploads/2024/03/best-amazon-beauty-products_8d0973.jpg?w=1000&h=563&crop=1",
        source: "WWD",
        link: "https://wwd.com/shop/shop-beauty/best-amazon-beauty-products-1234974624/",
      },
      {
        title: "Products and Services - Definitions, Examples, Differences",
        imageUrl: "https://cdn.corporatefinanceinstitute.com/assets/products-and-services-1024x1024.jpeg",
        source: "Corporate Finance Institute",
        link: "https://corporatefinanceinstitute.com/resources/management/products-and-services/",
      }
    ];
    setProducts(apiData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-playfair text-gray-800">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="relative overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 font-playfair line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">Source: {product.source}</p>
              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-pink-500 hover:text-pink-700 text-sm transition duration-300 group-hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

