"use client";
import Image from "next/image"
import menuData from "../../../src/menuData.json"
import { motion } from "framer-motion"

export default function DrinksMenu() {
    const drinkMenuCategories = [
        { key: 'coffee', data: menuData.drinks.coffee },
        { key: 'coldCoffee', data: menuData.drinks.coldCoffee },
        { key: 'tea', data: menuData.drinks.tea },
        { key: 'somethingHot', data: menuData.drinks.somethingHot },
        { key: 'coldBeverages', data: menuData.drinks.coldBeverages },
        { key: 'shakes', data: menuData.drinks.shakes }
    ];

    return (
        <motion.div 
            className="overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div 
                className="flex flex-col justify-center relative items-center content-center w-full min-h-[80vh] overflow-hidden px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1 
                    className="text-center text-3xl md:text-4xl lg:text-6xl fontchange px-2"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Explore Our <span className="text-[#7E4300]">Drinks Menu</span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Image 
                        src="/svg/cards1.svg" 
                        alt="Drinks Menu Image" 
                        width={900} 
                        height={800} 
                        className="mx-auto mt-6 md:mt-10 rounded-4xl w-full max-w-xs md:max-w-md lg:max-w-2xl h-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                    animate={{ opacity: 0.7, scale: 1, rotate: 130 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                >
                    <Image 
                        src={"/svg/Leaf.svg"}
                        alt="Design Left"
                        width={500}
                        height={300}
                        className="hidden md:block w-32 h-36 lg:w-70 lg:h-90 -top-10 lg:-top-20 -z-1 -left-10 lg:-left-30 absolute rounded-4xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
                    animate={{ opacity: 0.7, scale: 1, rotate: 45 }}
                    transition={{ duration: 1.2, delay: 1.0 }}
                >
                    <Image 
                        src={"/svg/Leaf.svg"}
                        alt="Design Left"
                        width={500}
                        height={300}
                        className="hidden md:block w-32 h-36 lg:w-70 lg:h-90 top-5 lg:top-10 -z-1 -right-10 lg:-right-30 absolute rounded-4xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                >
                    <Image 
                        src={"/svg/DesignL.svg"}
                        alt="Design Left"
                        width={500}
                        height={300}
                        className="hidden lg:block w-70 h-90 -z-1 top-70 left-0 absolute rounded-4xl"
                    />
                </motion.div>
                
                <motion.button 
                    className="border py-2 md:py-3 px-4 md:px-5 rounded-4xl mt-4 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    scroll down
                </motion.button>
            </motion.div>

            {/* Menu Categories */}
            <motion.div 
                className="py-8 md:py-16 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {drinkMenuCategories.map((category, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={category.key} 
                                className={`relative mb-12 md:mb-20 ${isEven ? 'md:mr-16 lg:mr-24' : 'md:ml-16 lg:ml-24'}`}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Leaf decorations - alternating sides - hidden on mobile */}
                                {isEven ? (
                                    <Image 
                                        src="/svg/Leaf.svg" 
                                        alt="Leaf decoration" 
                                        width={120} 
                                        height={120} 
                                        className={`hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 lg:w-24 lg:h-24 opacity-20 -z-1 ${index % 4 === 0 ? 'rotate-45' : 'rotate-12'}`}
                                    />
                                ) : (
                                    <Image 
                                        src="/svg/Leaf.svg" 
                                        alt="Leaf decoration" 
                                        width={120} 
                                        height={120} 
                                        className={`hidden md:block absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 lg:w-24 lg:h-24 opacity-20 -z-1 ${index % 4 === 1 ? 'rotate-[-45deg]' : 'rotate-[-12deg]'}`}
                                    />
                                )}

                                {/* Category Header */}
                                <div className={`text-center ${isEven ? 'md:text-right' : 'md:text-left'} mb-6 md:mb-8`}>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl fontchange text-[#7E4300] mb-2">
                                        {category.data.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
                                        {category.data.description}
                                    </p>
                                </div>

                                {/* Menu Items */}
                                <div className="space-y-3 md:space-y-4">
                                    {category.data.items?.map((item, itemIndex) => (
                                        <div key={itemIndex} className="group">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg md:text-xl font-medium leading-tight mb-1">
                                                        {item.name.split(' ').map((word, i) => {
                                                            if (word.toLowerCase().includes('chocolate') || 
                                                                word.toLowerCase().includes('vanilla') || 
                                                                word.toLowerCase().includes('strawberry') ||
                                                                word.toLowerCase().includes('coffee') ||
                                                                word.toLowerCase().includes('tea') ||
                                                                word.toLowerCase().includes('mocha') ||
                                                                word.toLowerCase().includes('frappe') ||
                                                                word.toLowerCase().includes('hot') ||
                                                                word.toLowerCase().includes('latte') ||
                                                                word.toLowerCase().includes('bubblegum')) {
                                                                return <span key={i} className="text-[#7E4300]">{word} </span>;
                                                            }
                                                            return <span key={i}>{word} </span>;
                                                        })}
                                                    </h3>
                                                </div>
                                                
                                                {/* Dotted line separator */}
                                                <div className="flex-1 border-b border-dotted border-gray-400 mb-2 mx-4"></div>
                                                
                                                {/* Price */}
                                                <div className="text-lg md:text-xl font-bold text-[#7E4300] min-w-fit">
                                                    ₹{item.price}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}