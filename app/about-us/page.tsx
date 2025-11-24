"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { motion } from 'framer-motion';
export default function AboutUs() {
    AOS.init();
     useEffect(() => {
          AOS.init({
            // Global settings:
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120,
            delay: 0,
            duration: 1000,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
          });
        }, []);

    return (
        
        <div className="min-h-screen bg-gradient-to-br from-[#F6EBDA] via-white to-[#F4AE26] flex flex-col items-center justify-start"
        data-aos="fade-up"
        >
            {/* Hero Section */}
            <div className="w-full relative h-[350px] md:h-[500px] flex items-center justify-center mb-12"
            
            >
              
                                <div
                                    className="absolute inset-0 rounded-b-3xl flex flex-col items-center justify-center"
                                    style={{
                                        backgroundImage: "linear-gradient(rgba(44, 21, 5, 0.7), rgba(244, 174, 38, 0.3)), url('/svg/menu.jpg')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#F4AE26] drop-shadow-lg mb-4 tracking-wide">Welcome to 5Monkey Café</h1>
                 
                                    <p className="text-xl md:text-3xl font-semibold text-white max-w-2xl text-center px-4 drop-shadow">Experience authentic European & Italian flavors in a cozy, vibrant setting.</p>
                                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-5xl w-full px-6 py-12 bg-white bg-opacity-80 rounded-3xl shadow-xl flex flex-col gap-12 items-center">
                <div className="w-full flex flex-col md:flex-row gap-12 items-center">
                    {/* Left - Image/Illustration */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/svg/CoffeeAbout.svg" alt="Our Story" className="w-80 h-80 object-contain rounded-2xl shadow-lg" />
                    </div>
                    {/* Right - Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2F2105] mb-4">A Taste of Europe & Italy in Sonipat</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Sonipat is known for its evolving food culture, and 5Monkey Café stands out as a must-visit destination for those who crave something unique. Our menu is carefully curated to offer an authentic European and Italian experience, ensuring that every bite transports you to the streets of Italy and the cafés of Paris.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            From handcrafted pasta and wood-fired pizzas to fresh salads and decadent desserts, we bring you a diverse range of flavors that promise to satisfy every palate.
                        </p>
                    </div>
                </div>

                {/* Must-Try Dishes Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <span className="text-4xl mb-2">🍕</span>
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Pizzas</h3>
                        <p className="text-gray-600 text-center">Hand-kneaded dough, fresh toppings, premium cheese, baked in a wood-fired oven. Try Margherita or BBQ Chicken Pizza!</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <span className="text-4xl mb-2">🍝</span>
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Signature Pasta</h3>
                        <p className="text-gray-600 text-center">Handmade pasta in rich sauces: Alfredo, Arrabbiata, Truffle Mushroom. Unforgettable flavors!</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <span className="text-4xl mb-2">🥗</span>
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Gourmet Salads</h3>
                        <p className="text-gray-600 text-center">Crisp veggies, fresh greens, flavorful dressings. Try our Greek Salad and Caesar Salad!</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <span className="text-4xl mb-2">🥖</span>
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Bruschetta & Appetizers</h3>
                        <p className="text-gray-600 text-center">Bruschetta Platter, Garlic Bread with Cheese, Classic Antipasto Platter—perfect starters!</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <span className="text-4xl mb-2">🍰</span>
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Decadent Desserts</h3>
                        <p className="text-gray-600 text-center">Tiramisu, New York Cheesecake, Warm Chocolate Brownie with Ice Cream—sweet endings!</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <span className="text-4xl mb-2">☕</span>
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Specialty Coffees & Beverages</h3>
                        <p className="text-gray-600 text-center">Espresso, Cappuccino, Mocha, and more. Pair with our signature desserts for the ultimate café experience.</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
                    <div className="bg-[#F4AE26] rounded-2xl shadow-lg p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">75+</h3>
                        <p className="text-lg text-[#2F2105]">Delicious Dishes</p>
                    </div>
                    <div className="bg-[#2F2105] rounded-2xl shadow-lg p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">102</h3>
                        <p className="text-lg text-[#F4AE26]">Professional Chefs</p>
                    </div>
                    <div className="bg-[#F4AE26] rounded-2xl shadow-lg p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">7k</h3>
                        <p className="text-lg text-[#2F2105]">Happy Customers</p>
                    </div>
                    <div className="bg-[#2F2105] rounded-2xl shadow-lg p-8">
                        <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                        <p className="text-lg text-[#F4AE26]">Organic Ingredients</p>
                    </div>
                </div>

                {/* Chefs Section */}
                <div className="w-full mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F2105] mb-8 text-center">Our Chefs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" >
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center" >
                            <img src="/svg/tudor.jpg" alt="Tudor Boyd" className="w-24 h-24 rounded-full mb-4" data-aos="flip-right"/>
                            <h3 className="text-xl font-bold text-[#2F2105] mb-1">Tudor Boyd</h3>
                            <p className="text-gray-600 mb-2">Sauce Chef</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                            <img src="/svg/cillian.jpg" alt="Cillian Pollard" className="w-24 h-24 rounded-full mb-4" data-aos="flip-right"/>
                            <h3 className="text-xl font-bold text-[#2F2105] mb-1">Cillian Pollard</h3>
                            <p className="text-gray-600 mb-2">Head Chef</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                            <img src="/svg/tyler.jpg" alt="Tyler Meza" className="w-24 h-24 rounded-full mb-4" data-aos="flip-right"/>
                            <h3 className="text-xl font-bold text-[#2F2105] mb-1">Tyler Meza</h3>
                            <p className="text-gray-600 mb-2">Pastry Chef</p>
                        </div>
                    </div>
                </div>

                {/* Working Hours Section */}
                <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Working Hours</h3>
                        <p className="text-gray-600 mb-2">Monday - Friday</p>
                        <p className="text-lg text-[#F4AE26] font-bold mb-2">08:00 AM - 11:00 PM</p>
                        <p className="text-gray-600 mb-2">Saturday - Sunday</p>
                        <p className="text-lg text-[#F4AE26] font-bold">08:00 AM - 01:00 PM</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                        <h3 className="text-xl font-bold text-[#2F2105] mb-2">Perfect for Every Occasion</h3>
                        <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1 text-left">
                            <li>Casual dining with friends & family</li>
                            <li>Birthday & anniversary celebrations</li>
                            <li>Corporate lunches & meetings</li>
                            <li>Romantic dinner dates</li>
                            <li>Relaxing coffee breaks & solo work sessions</li>
                        </ul>
                        <p className="text-gray-600 text-center">We also take party bookings and offer customized catering services for your special events.</p>
                    </div>
                </div>

                {/* News & Events Section */}
                <div className="w-full mt-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F2105] mb-8 text-center">News & Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div 
                        whileHover={{ scale: 1.05 }}

                        className="bg-black rounded-2xl shadow-lg p-8 flex flex-col"
                        style={{
                            backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/svg/news1.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}>
                            <h3 className="text-xl font-bold text-[#F4AE26] mb-2">Beyond the Plate: The Art of Fine Dining at 5Monkey Bistro</h3>
                            <p className="text-white mb-2">December 2, 2021 / No Comments</p>
                            <p className="text-white mb-4">Fine dining is more than just great food—it’s an experience. Discover the art of fine dining at 5Monkey Bistro.</p>
                            <a href="#" className="text-[#F4AE26]  font-bold hover:underline">Read More</a>
                        </motion.div>
                        <motion.div 
                        whileHover={{ scale: 1.05 }}

                        className="bg-black rounded-2xl shadow-lg p-8 flex flex-col"
                            style={{
                                backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/svg/news2.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                            <h3 className="text-xl font-bold text-[#F4AE26] mb-2">Celebrate the Season with Holiday Wine from Around the World</h3>
                            <p className="text-white mb-2">December 2, 2021 / No Comments</p>
                            <p className="text-white mb-4">Beautiful we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy...</p>
                            <a href="#" className="text-[#F4AE26] font-bold hover:underline">Read More</a>
                        </motion.div>
                        <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-black rounded-2xl shadow-lg p-8 flex flex-col"
                            style={{
                                backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/svg/news3.jpg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                            <h3 className="text-xl font-bold text-[#F4AE26] mb-2">Mexican-Inspired Casseroles for Family-Pleasing Dinners</h3>
                            <p className="text-white mb-2">December 2, 2021 / No Comments</p>
                            <p className="text-white mb-4">Admiration we surrounded possession frequently he. Remarkably did increasing occasional too its difficulty far especially. Known tiled but sorry joy...</p>
                            <a href="#" className="text-[#F4AE26] font-bold hover:underline">Read More</a>
                        </motion.div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="w-full flex flex-col items-center py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2F2105] mb-6">Visit Us Today!</h2>
                    <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">If you’re in Sonipat and craving a taste of European and Italian cuisine, 5Monkey Café is your go-to destination. Whether you’re dining in, taking away, or planning a special event, we promise an unforgettable culinary journey.</p>
                    <button className="bg-[#F4AE26] text-[#2F2105] font-bold px-10 py-4 rounded-2xl shadow-lg hover:bg-[#2F2105] hover:text-[#F4AE26] transition-colors duration-300 cursor-pointer">Book a Table</button>
                </div>
            </div>
        </div>
    );
}