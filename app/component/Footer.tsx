import Image from "next/image"
export default function Footer(){
    return(
    <>
   <div className="w-screen flex flex-col justify-center items-center content-center bg-[#FFF2E6] mt-5 py-5">
    <Image src="/svg/FLogo.svg" alt="Footer Image" width={100} height={300} />
    <div className="hidden md:flex gap-10 lg:gap-20 flex-row justify-center items-center text-lg mt-10">
        <a href="/" className="hover:text-amber-600 transition-colors">Home</a>
        <a href="/#OurStory" className="hover:text-amber-600 transition-colors">Our Story</a>
        <a href="/menu" className="hover:text-amber-600 transition-colors">Menu</a>
        <a href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
        <a href="/contact" className="hover:text-amber-600 transition-colors">Contact</a>
    </div>
    <p className="mt-5">©️2025 5monkey.in | All Rights Reserved </p>
   </div>
    </>
    )
}