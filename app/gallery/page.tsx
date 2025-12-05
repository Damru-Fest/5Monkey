"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gallery(){
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    
    const images = [
        { src: "/svg/g1.webp", alt: "Gallery Image 1" },
        { src: "/svg/g2.webp", alt: "Gallery Image 2" },
        { src: "/svg/g3.webp", alt: "Gallery Image 3" },
        { src: "/svg/g4.webp", alt: "Gallery Image 4" },
        { src: "/svg/g5.webp", alt: "Gallery Image 5" },
        { src: "/svg/g6.webp", alt: "Gallery Image 6" },
        { src: "/svg/g7.webp", alt: "Gallery Image 7" },
    ];

    const openModal = (index: number) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
    };

    return(
        <>
            <div className="min-h-screen relative p-8 overflow-x-hidden">
                <h1 className="text-[#7E4300] text-center text-6xl fontchange mb-12">Gallery</h1>
                
                {/* Grid container */}
                <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-6xl mx-auto h-[600px] ">
                    {/* G1 - Large top left */}
                    <div className="col-span-2 row-span-2 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(0)}>
                        <img src="/svg/g1.webp" alt="Gallery Image 1" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* G2 - Medium top right */}
                    <div className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(1)}>
                        <img src="/svg/g2.webp" alt="Gallery Image 2" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* G3 - Medium top far right */}
                    <div className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(2)}>
                        <img src="/svg/g3.webp" alt="Gallery Image 3" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* G4 - Medium middle right */}
                    <div className="col-span-2 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(3)}>
                        <img src="/svg/g4.webp" alt="Gallery Image 4" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* G5 - Small bottom left */}
                    <div className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(4)}>
                        <img src="/svg/g5.webp" alt="Gallery Image 5" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* G6 - Medium bottom middle */}
                    <div className="col-span-2 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(5)}>
                        <img src="/svg/g6.webp" alt="Gallery Image 6" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* G7 - Small bottom right */}
                    <div className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" onClick={() => openModal(6)}>
                        <img src="/svg/g7.webp" alt="Gallery Image 7" className="w-full h-full object-cover" />
                    </div>
                </div>

                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute -top-10 -left-30 w-70 h-90 rotate-130 rounded-4xl"
                />
                 <Image
                    src="/svg/stem.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-100 -left-30 w-70 h-90 rotate-0 rounded-4xl"
                />

                <Image
                    src="/svg/PinkLeaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-70 -left-30 w-90 h-90 -z-1 rotate-0 rounded-4xl"
                />

                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-40 w-70 h-90 -right-40 rotate-45 rounded-4xl"
                />

                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-100 w-70 h-90 -right-40 rotate-300 rounded-4xl"
                />
                 <Image
                    src="/svg/stem.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-80 w-90 h-90 -right-30 rotate-180 rounded-4xl"
                />
            </div>

            {/* Modal Carousel */}
            {selectedImage !== null && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" onClick={closeModal}>
                    <div className="relative max-w-4xl max-h-4xl w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        {/* Close button */}
                        <button 
                            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        
                        {/* Previous button */}
                        <button 
                            className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
                            onClick={prevImage}
                        >
                            ‹
                        </button>
                        
                        {/* Image */}
                        <img 
                            src={images[selectedImage].src} 
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                        
                        {/* Next button */}
                        <button 
                            className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
                            onClick={nextImage}
                        >
                            ›
                        </button>
                        
                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
                            {selectedImage + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}