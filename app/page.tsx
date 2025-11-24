"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { data } from "framer-motion/client";

// TypeScript interfaces
interface Review {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

export default function Home() {
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deliverySlide, setDeliverySlide] = useState(0);
  const [rotationIndex, setRotationIndex] = useState(0);
  const [reviewsSlide, setReviewsSlide] = useState(0);
  
  // Auto-rotate the circular cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate reviews every 4 seconds
  useEffect(() => {
    const reviewsInterval = setInterval(() => {
      setReviewsSlide(prev => (prev + 1) % 2); // 2 slides for 6 reviews (3 per slide)
    }, 4000);
    
    return () => clearInterval(reviewsInterval);
  }, []);
  
  const cards = [
    {
      id: 1,
      image: "/svg/bestDrink.webp",
      title: "Best Drink",
      tags: ["Rich", "Bold"]
    },
    {
      id: 2,
      image: "/svg/DeliciousDishes.webp", 
      title: "Delicious Dishes",
      tags: ["Creamy", "Smooth"]
    },
    {
      id: 3,
      image: "/svg/Desserts.webp",
      title: "Desserts", 
      tags: ["Mild", "Sweet"]
    }
  ];

  const deliveryCards = [
    {
      id: 1,
      image: "/svg/food-truck 1.svg",
      title: "Fast Delivery",
      description: "Choose delivery service"
    },
    {
      id: 2,
      image: "/svg/coffee-cup.svg",
      title: "Fresh Coffee",
      description: "there are 20+ coffees for you to choose from."
    },
    {
      id: 3,
      image: "/svg/coffee-cup 2.svg",
      title: "Premium Quality",
      description: "Choose delivery service"
    }
  ];

  const reviewsData = [
    {
      id: 1,
      name: "Sarah Johnson",
      photo: "Photo",
      review: "Amazing coffee and excellent service! The atmosphere is perfect for both work and relaxation.",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      photo: "Photo",
      review: "Best coffee place in town! The baristas really know their craft. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Davis",
      photo: "Photo",
      review: "Love the cozy ambiance and friendly staff. Their latte art is beautiful and taste is even better!",
      rating: 5
    },
    {
      id: 4,
      name: "Alex Thompson",
      photo: "Photo",
      review: "Exceptional quality and service. The coffee beans are fresh and brewing technique is perfect.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Rodriguez",
      photo: "Photo",
      review: "Great place to unwind! The pastries pair perfectly with their signature coffee blends.",
      rating: 5
    },
    {
      id: 6,
      name: "David Kim",
      photo: "Photo",
      review: "Outstanding service and premium quality. The delivery is fast and reliable. Never disappoints!",
      rating: 5
    }
  ];

  // Split reviews into chunks of 2 for carousel slides (always 2 per slide)
  const reviewSlides = [];
  for (let i = 0; i < reviewsData.length; i += 2) {
    reviewSlides.push(reviewsData.slice(i, i + 2));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const nextDeliverySlide = () => {
    setDeliverySlide((prev) => (prev + 1) % deliveryCards.length);
  };

  const prevDeliverySlide = () => {
    setDeliverySlide((prev) => (prev - 1 + deliveryCards.length) % deliveryCards.length);
  };

  return (
    <>
    {/* Hero */}
    <div className="flex flex-row w-screen h-[110vh] relative"
      style={
        {
          backgroundImage: "url('./svg/bg-image.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
         
        }
     
      }
      data-aos="fade-up">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col h-[80vh] justify-center  items-center px-12 lg:px-20">
          <div className="max-w-2xl">
            <h1 className="md:text-4xl text-2xl lg:text-7xl font-bold text-[#2F2105] mb-6 leading-tight">
              Enjoy your <span className="text-[#FF902A]">coffee</span> before your activity
            </h1>
            <p className="text-lg lg:text-xl text-[#7E7D7A] mb-8 leading-relaxed">
              Boost your productivity and build your mood with a glass of coffee in the morning
            </p>
            <button className="bg-[#2F2105] cursor-pointer text-white font-semibold md:px-10 px-2 py-4 rounded-4xl transition-colors duration-300 shadow-lg">
              Book a Table
            </button>
            <button className="cursor-pointer text-[#F4AE26] mx-5 font-semibold md:px-10 px-2 py-4 rounded-4xl transition-colors duration-300">
              View the Menu
            </button>
          </div>
        </div>

        {/* Right side - Rotating circular cards */}
        <div className="flex-1 md:flex flex-col hidden h-[80vh] justify-center items-center relative">
          <div className="relative md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[650px] xl:h-[650px]">
            {/* Card 1 */}
            <div 
              className={`absolute md:w-48 md:h-60 lg:w-52 lg:h-64 xl:w-64 xl:h-80 bg-white rounded-xl shadow-xl p-6 md:p-6 xl:p-8 transition-all duration-1000 ease-in-out ${
                rotationIndex === 0 ? 'md:top-12 md:right-12 xl:top-16 xl:right-16 z-30 scale-110' : 
                rotationIndex === 1 ? 'top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-20 scale-100' : 
                'md:bottom-12 md:right-12 xl:bottom-16 xl:right-16 z-10 scale-90' 
              }`}
              style={{
                backgroundImage:"url('/svg/5monkey.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              
            </div>

            {/* Card 2 */}
            <div 
              className={`absolute md:w-48 md:h-60 lg:w-52 lg:h-64 xl:w-64 xl:h-80 bg-white rounded-xl shadow-xl p-6 md:p-6 xl:p-8 transition-all duration-1000 ease-in-out ${
                rotationIndex === 1 ? 'md:top-12 md:right-12 xl:top-16 xl:right-16 z-30 scale-110' : 
                rotationIndex === 2 ? 'top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-20 scale-100' : 
                'md:bottom-12 md:right-12 xl:bottom-16 xl:right-16 z-10 scale-90'
              }`}
              style={{
                backgroundImage:"url('/svg/cuisine.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            
            </div>

            {/* Card 3 */}
            <div 
              className={`absolute md:w-48 md:h-60 lg:w-52 lg:h-64 xl:w-64 xl:h-80 bg-white rounded-xl shadow-xl p-6 md:p-6 xl:p-8 transition-all duration-1000 ease-in-out ${
                rotationIndex === 2 ? 'md:top-12 md:right-12 xl:top-16 xl:right-16 z-30 scale-110' : 
                rotationIndex === 0 ? 'top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-20 scale-100' : 
                'md:bottom-12 md:right-12 xl:bottom-16 xl:right-16 z-10 scale-90'
              }`}
              style={{
                backgroundImage:"url('/svg/cuisine2.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
            

            </div>
          </div>
        </div>

        {/* Popular Now Section - positioned at bottom with cards extending outside */}
        <div className="absolute -bottom-70 md:-bottom-70 lg:-bottom-50 left-0 right-0 px-4 md:px-12 lg:px-20">
          <div className="text-center md:text-left md:ml-20 mb-4 md:mb-8 mt-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              Popular <span className="underline" style={{textUnderlineOffset:'5px',
                textDecorationColor:'orange'
              }}>Now</span>
            </h2>
          </div>
          
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out pb-24"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {cards.map((card, index) => (
                  <div key={card.id} className="w-full shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-auto transform translate-y-12">
                      <div className="mb-4">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={200}
                          height={150}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#2F2105] mb-2">{card.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <button 
                onClick={prevSlide}
                className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-amber-700' : 'bg-amber-300'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Grid - Hidden on Mobile */}
          <div className="hidden md:flex justify-center gap-8 pb-24">
            {cards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-xl p-6 w-64 min-h-[300px] transform translate-y-12">
                <div className="mb-4">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={250}
                    height={150}
                    className="w-full h-50 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">{card.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        

    </div>

    {/* How to use Delivery Service */}
    <div className="flex flex-col md:mt-80 mt-90 lg:mt-60 mb-20 mx-20">
      <h1 className="md:text-3xl text-xl font-bold text-[#2F2105]">How to use Delivery <span style={{textDecoration: 'underline', textDecorationColor: 'orange',textUnderlineOffset:'5px'}}>Service</span></h1>

      {/* Mobile Delivery Carousel */}
      <div className="md:hidden mt-8">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${deliverySlide * 100}%)` }}
          >
            {deliveryCards.map((card) => (
              <div key={card.id} className="w-full shrink-0 px-4">
                <div className="rounded-lg p-6 w-full max-w-sm mx-auto text-center">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2F2105] mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Delivery Carousel Navigation */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button 
            onClick={prevDeliverySlide}
            className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {deliveryCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setDeliverySlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === deliverySlide ? 'bg-amber-700' : 'bg-amber-300'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextDeliverySlide}
            className="bg-amber-700 hover:bg-amber-800 text-white p-2 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Delivery Grid - Hidden on Mobile */}
      <div className="hidden md:flex justify-center gap-8 mt-10">
        {deliveryCards.map((card) => (
          <div key={card.id} className="rounded-lg p-8 w-80 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src={card.image}
                alt={card.title}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-4">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* AboutUs */}
    <div className="w-full flex flex-row justify-around relative"
    style={{
      backgroundImage: "url('./svg/About-bg.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px',
    }}
    >
      <Image
        src={"/svg/CoffeeAbout.svg"}
        alt="About Us"
        width={350}
        height={300}
        className="absolute hidden lg:block xl:left-60 left-20 top-40 transform -translate-y-1/2"

        data-aos="flip-left"
      />
      
    {/* Right side - About Us Content */}
    <div className="absolute inset-0 md:right-20 md:left-auto md:top-30 md:-translate-y-1/2 flex items-center justify-center md:justify-start md:items-start md:pt-16 max-w-lg md:max-w-lg mx-auto md:mx-0 px-4 md:px-0 text-center md:text-left">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2F2105] mb-4">
            About Us
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-[#2F2105] mb-6">
            Your Perfect Coffee Experience
          </h3>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            At 5Monkey Bistro, we're passionate about serving the finest coffee experience. 
            Our skilled baristas craft each cup with precision using premium beans sourced 
            from the world's best coffee regions.
          </p>
          <button className="bg-[#2F2105] text-[#F4AE26] font-semibold px-6 md:px-8 py-3 rounded-4xl cursor-pointer transition-colors duration-300 shadow-lg">
            Learn More
          </button>
        </div>
    </div>


     
    </div>

    {/* Special Menu For You */}
    <div className="w-full px-12 lg:px-20 mt-10 py-16">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#000000] mb-4">
          Special Menu <span style={{textDecoration: 'underline', textDecorationColor: 'orange', textUnderlineOffset:'8px'}}>For You</span>
        </h2>
      </div>

      {/* 6 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Card 1 - Cappuccino */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        data-aos="flip-right">
          <div className="mb-4">
            <Image
              src="/svg/Cappacino.svg"
              alt="Cappuccino"
              width={150}
              height={150}
              className="w-full h-40 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-[#2F2105] mb-3">Cappuccino</h3>
          <p className="text-gray-600 leading-relaxed">
            Rich espresso topped with steamed milk foam and a sprinkle of cocoa powder. Perfect balance of strong coffee and creamy texture.
          </p>
        </div>

        {/* Card 2 - Hot Milk */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        data-aos="flip-right">
          <div className="mb-4">
            <Image
              src="/svg/Hotmilk.svg"
              alt="Hot Milk"
              width={150}
              height={150}
              className="w-full h-40 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-[#2F2105] mb-3">Hot Milk</h3>
          <p className="text-gray-600 leading-relaxed">
            Creamy steamed milk with a touch of honey and vanilla. A comforting warm beverage perfect for relaxing moments.
          </p>
        </div>

        {/* Card 3 - Ice Cream */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        data-aos="flip-right">
          <div className="mb-4">
            <Image
              src="/svg/Icecream.svg"
              alt="Ice Cream"
              width={150}
              height={150}
              className="w-full h-40 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-[#2F2105]]mb-3">Ice Cream</h3>
          <p className="text-gray-600 leading-relaxed">
            Artisanal ice cream made with premium ingredients. Available in various flavors including vanilla, chocolate, and seasonal specials.
          </p>
        </div>

        {/* Card 4 - Macchiato */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        data-aos="flip-right">
          <div className="mb-4">
            <Image
              src="/svg/Maccacino.svg"
              alt="Macchiato"
              width={150}
              height={150}
              className="w-full h-40 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-[#2F2105] mb-3">Macchiato</h3>
          <p className="text-gray-600 leading-relaxed">
            Espresso "marked" with a dollop of foamed milk. Bold coffee flavor with just a hint of creaminess for coffee purists.
          </p>
        </div>

        {/* Card 5 - Sandwich */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        data-aos="flip-right">
          <div className="mb-4">
            <Image
              src="/svg/Sandwich.svg"
              alt="Sandwich"
              width={150}
              height={150}
              className="w-full h-40 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-[#2F2105] mb-3">Sandwich</h3>
          <p className="text-gray-600 leading-relaxed">
            Freshly made sandwiches with premium ingredients. Choose from our selection of gourmet fillings and artisanal breads.
          </p>
        </div>

        {/* Card 6 - Waffle */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
        data-aos="flip-right">
          <div className="mb-4">
            <Image
              src="/svg/waffel.svg"
              alt="Waffle"
              width={150}
              height={150}
              className="w-full h-40 object-contain mx-auto"
            />
          </div>
          <h3 className="text-xl font-bold text-[#2F2105] mb-3">Waffle</h3>
          <p className="text-gray-600 leading-relaxed">
            Golden crispy waffles served with fresh fruits, whipped cream, and maple syrup. Perfect for breakfast or dessert.
          </p>
        </div>

      </div>
    </div>


    {/* what they say1 */}
    <div className="w-full min-h-130 flex flex-col md:flex-row justify-center items-center py-16 px-4"
      style={{backgroundImage: "url('./svg/whatsaybg.svg')",
        backgroundRepeat: 'no-repeat',
      }}>
      {/* What they say2*/}
      <div className="w-full md:w-1/3 text-start mb-12 md:mb-0 md:pl-20">
        <h1 className="text-3xl md:text-4xl text-[#000000] mb-2 font-bold">What they say about us</h1>
        <p className="text-[#7E7D7A]">We always provide the best service and always maintain the quality of coffee</p>
      </div>

      {/* Reviews Carousel */}
      <div className="w-full md:w-2/3 max-w-6xl overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${reviewsSlide * 100}%)` }}
        >
          {reviewSlides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 px-2 md:px-4">
              {slide.map((review, index) => (
                <div key={review.id} 
                  className="min-h-80 flex flex-col justify-between rounded-xl shadow-lg bg-white p-6"
                  style={{
                    backgroundImage: "url('./svg/Lisa.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}>
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="font-semibold text-amber-900 text-base md:text-lg">{review.name}</h3>
                    </div>
                  </div>
                  <div className="w-full flex justify-end items-center rounded-2xl bg-amber-200 p-4 mt-4">
                    <p className="text-[#2F2105] text-sm md:text-base text-start leading-relaxed">
                      "{review.review}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {reviewSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setReviewsSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === reviewsSlide ? 'bg-amber-600' : 'bg-amber-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>

    
    </>
  );
}
