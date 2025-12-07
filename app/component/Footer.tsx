import Image from "next/image"
export default function Footer(){
    return(
    <>
   <div className="w-full flex flex-col justify-center items-center content-center bg-[#FFF2E6] mt-5 py-8 px-4">
    <Image 
        src="/svg/FLogo.svg" 
        alt="Footer Image" 
        width={100} 
        height={300} 
        className="w-20 h-24 md:w-24 md:h-28 lg:w-28 lg:h-32"
    />
    
    {/* Desktop Navigation */}
    <div className="hidden lg:flex gap-10 lg:gap-20 flex-row justify-center items-center text-lg mt-8 lg:mt-10">
        <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
        <a href="/#OurStory" className="hover:text-amber-600 transition-colors">Our Story</a>
        <a href="/menu" className="hover:text-amber-600 transition-colors">Menu</a>
        <a href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
        <a href="/contact" className="hover:text-amber-600 transition-colors">Contact</a>
    </div>

    {/* Tablet Navigation */}
    <div className="hidden md:flex lg:hidden gap-6 flex-row justify-center items-center text-base mt-6 flex-wrap">
        <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
        <a href="/#OurStory" className="hover:text-amber-600 transition-colors">Story</a>
        <a href="/menu" className="hover:text-amber-600 transition-colors">Menu</a>
        <a href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
        <a href="/contact" className="hover:text-amber-600 transition-colors">Contact</a>
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden flex flex-col gap-3 justify-center items-center text-base mt-6">
        <div className="flex gap-6">
            <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="/#OurStory" className="hover:text-amber-600 transition-colors">Story</a>
            <a href="/menu" className="hover:text-amber-600 transition-colors">Menu</a>
        </div>
        <div className="flex gap-6">
            <a href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-amber-600 transition-colors">Contact</a>
        </div>
    </div>

    <p className="mt-5 md:mt-6 lg:mt-8 text-sm md:text-base text-center px-2">©️2025 5monkey.in | All Rights Reserved </p>
   </div>
    </>
    )
}