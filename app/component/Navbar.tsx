import Image from "next/image"
export default function Navbar(){
    return(
    <>
    <div className="flex flex-row justify-between items-center  w-screen py-15  z-50 px-15">
        <Image src="/svg/logo.svg" alt="logo"
        unoptimized
        width={150}
        height={50}
        className="m-4 mb-0"
        />
        <div className="hidden md:flex gap-5 lg:gap-10 flex-row justify-center items-center text-lg">
            <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
            <a href="/#OurStory" className="hover:text-amber-600 transition-colors">Our Story</a>
            <a href="/menu" className="hover:text-amber-600 transition-colors">Menu</a>
            <a href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
            <a href="/contact" className="hover:text-amber-600 transition-colors">Contact</a>
            <button className="bg-[#7E4300] text-white px-5 py-2 rounded-4xl cursor-pointer">Book a Table</button>
        </div>

    </div>
    </>
    )
}