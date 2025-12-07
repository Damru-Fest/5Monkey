"use client";
import Image from "next/image"
import menuData from "../../src/menuData.json"
import { motion } from "framer-motion"

export default function Menu() {
    const menuCategories = [
        { key: 'allDayBreakfast', data: menuData.menu.allDayBreakfast },
        { key: 'soups', data: menuData.menu.soups },
        { key: 'salads', data: menuData.menu.salads },
        { key: 'garlicBreads', data: menuData.menu.garlicBreads },
        { key: 'smallBites', data: menuData.menu.smallBites },
        { key: 'pizzas', data: menuData.menu.pizzas },
        { key: 'pasta', data: menuData.menu.pasta },
        { key: 'sandwiches', data: menuData.menu.sandwiches },
        { key: 'burgers', data: menuData.menu.burgers },
        { key: 'bigPlates', data: menuData.menu.bigPlates }
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
                    Explore Our <span className="text-[#7E4300]">Menu</span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Image 
                        src="/svg/cards1.svg" 
                        alt="Menu Image" 
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
                    {menuCategories.map((category, index) => {
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
                                        src="/svg/PinkLeaf.svg"
                                        alt="Leaf decoration"
                                        width={150}
                                        height={200}
                                        className="hidden md:block absolute -left-20 lg:-left-32 top-10 w-24 h-32 md:w-32 md:h-40 opacity-80 -rotate-12"
                                    />
                                ) : (
                                    <Image 
                                        src="/svg/Leaf.svg"
                                        alt="Leaf decoration"
                                        width={150}
                                        height={200}
                                        className="hidden md:block absolute -right-20 lg:-right-32 top-10 w-24 h-32 md:w-32 md:h-40 opacity-80 rotate-12"
                                    />
                                )}

                                {/* Menu Section without cards */}
                                <div className="p-4 md:p-10">
                                    {/* Category Title */}
                                    <div className="text-center mb-6 md:mb-8">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black fontchange mb-2">
                                            {category.data.title}
                                        </h2>
                                        <div className="w-16 md:w-24 h-1 bg-[#7E4300] mx-auto rounded-full"></div>
                                    </div>
                                    
                                    {(category.data as any).description && (
                                        <p className="text-center text-gray-600 mb-6 md:mb-8 italic text-base md:text-lg px-2">
                                            {(category.data as any).description}
                                        </p>
                                    )}
                                    
                                    {/* Menu Items */}
                                    <div className="space-y-4 md:space-y-6">
                                        {category.data.items?.map((item, itemIndex) => (
                                            <div key={itemIndex} className="relative">
                                                {/* Item row with dotted line */}
                                                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                                                    {/* Left side - Item name and description */}
                                                    <div className="flex-1 md:pr-4 mb-2 md:mb-0">
                                                        <h3 className="text-lg md:text-xl font-semibold text-black mb-1 leading-tight">
                                                            {item.name.split(' ').map((word, i) => {
                                                                const shouldHighlight = ['Classic', 'Ham', 'Sausage', 'Spaghetti', 'Scrambled', 'French', 'Avocado', 'Tuscan', 'Tomato', 'Cream', 'Mushroom', 'Caesar', 'Apple', 'Summer', 'Slaw', 'Chicken', 'Tikka', 'Cheesy', 'Peri', 'Mexican', 'Big', 'Daddy'].includes(word);
                                                                return shouldHighlight ? (
                                                                    <span key={i} className="text-[#7E4300]">{word} </span>
                                                                ) : (
                                                                    <span key={i}>{word} </span>
                                                                );
                                                            })}
                                                        </h3>
                                                        {(item as any).description && (
                                                            <p className="text-sm text-gray-600 leading-relaxed mt-1">
                                                                {(item as any).description}
                                                            </p>
                                                        )}
                                                        {(item as any).addChicken && (
                                                            <p className="text-xs text-[#7E4300] mt-1 font-medium">
                                                                + Add Chicken Available
                                                            </p>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Dotted line - hidden on mobile */}
                                                    <div className="hidden md:flex flex-1 border-b-2 border-dotted border-[#7E4300] mb-2 mx-4"></div>
                                                    
                                                    {/* Right side - Price */}
                                                    <div className="text-left md:text-right">
                                                        <span className="text-xl md:text-2xl font-bold text-black">
                                                            ₹{item.price}
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* Mobile separator line */}
                                                <div className="md:hidden border-b border-gray-200 mt-3 mb-1"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}