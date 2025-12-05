import Image from "next/image"
import menuData from "../../src/menuData.json"

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
        <>
            {/* Hero Section */}
            <div className="flex flex-col justify-center relative items-center content-center w-screen h-[90%] overflow-hidden">
                <h1 className="text-center text-6xl fontchange">Explore Our <span className="text-[#7E4300]">Menu</span></h1>
                <Image 
                    src="/svg/MenuHero.svg" 
                    alt="Menu Image" 
                    width={900} 
                    height={800} 
                    className="mx-auto mt-10 rounded-4xl"
                />

                <Image 
                    src={"/svg/Leaf.svg"}
                    alt="Design Left"
                    width={500}
                    height={300}
                    className="w-70 h-90 -top-20 rotate-130 -left-30 absolute rounded-4xl"
                />

                <Image 
                    src={"/svg/Leaf.svg"}
                    alt="Design Left"
                    width={500}
                    height={300}
                    className="w-70 h-90 top-10 rotate-45 -right-30 absolute rounded-4xl"
                />

                <Image 
                    src={"/svg/DesignL.svg"}
                    alt="Design Left"
                    width={500}
                    height={300}
                    className="w-70 h-90 top-70 left-0 absolute rounded-4xl"
                />
                <Image 
                    src={"/svg/PinkLeaf.svg"}
                    alt="Design Left"
                    width={500}
                    height={300}
                    className="w-70 h-90 -top-10 left-220 absolute -z-1 rounded-4xl"
                />

                <Image 
                    src={"/svg/PinkLeaf.svg"}
                    alt="Design Left"
                    width={500}
                    height={300}
                    className="w-70 h-90 top-60 left-45 absolute rotate-180 rotate-x-180 -z-1 rounded-4xl"
                />

                <button className="border py-3 px-5 rounded-4xl">scroll down</button>
            </div>

            {/* Menu Categories */}
            <div className=" py-16">
                <div className="max-w-4xl mx-auto px-6">
                    {menuCategories.map((category, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={category.key} className={`relative mb-20 ${isEven ? 'ml-8' : 'mr-8'}`}>
                                {/* Leaf decorations - alternating sides */}
                                {isEven ? (
                                    <Image 
                                        src="/svg/PinkLeaf.svg"
                                        alt="Leaf decoration"
                                        width={150}
                                        height={200}
                                        className="absolute -right-20 top-10 w-32 h-40 opacity-80 rotate-12"
                                    />
                                ) : (
                                    <Image 
                                        src="/svg/Leaf.svg"
                                        alt="Leaf decoration"
                                        width={150}
                                        height={200}
                                        className="absolute -left-20 top-10 w-32 h-40 opacity-80 -rotate-12"
                                    />
                                )}

                                {/* Menu Section without cards */}
                                <div className="p-10">
                                    {/* Category Title */}
                                    <div className="text-center mb-8">
                                        <h2 className="text-5xl font-bold text-black fontchange mb-2">
                                            {category.data.title}
                                        </h2>
                                        <div className="w-24 h-1 bg-[#7E4300] mx-auto rounded-full"></div>
                                    </div>
                                    
                                    {(category.data as any).description && (
                                        <p className="text-center text-gray-600 mb-8 italic text-lg">
                                            {(category.data as any).description}
                                        </p>
                                    )}
                                    
                                    {/* Menu Items */}
                                    <div className="space-y-6">
                                        {category.data.items?.map((item, itemIndex) => (
                                            <div key={itemIndex} className="relative">
                                                {/* Item row with dotted line */}
                                                <div className="flex items-start justify-between">
                                                    {/* Left side - Item name and description */}
                                                    <div className="flex-1 pr-4">
                                                        <h3 className="text-xl font-semibold text-black mb-1 leading-tight">
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
                                                    
                                                    {/* Dotted line */}
                                                    <div className="flex-1 border-b-2 border-dotted border-[#7E4300] mb-2 mx-4"></div>
                                                    
                                                    {/* Right side - Price */}
                                                    <div className="text-right">
                                                        <span className="text-2xl font-bold text-black">
                                                            ₹{item.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}