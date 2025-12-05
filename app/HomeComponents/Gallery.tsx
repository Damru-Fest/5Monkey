"use client";
import { useState, useEffect } from "react";

export default function Gallery(){
    const [translateX, setTranslateX] = useState(0);
    
    // Sample cards data - you can replace with your own images later
    const galleryCards = [
        { id: 1, bgImage: "bg-[url('/svg/g1.webp')]", title: "Card 1" },
        { id: 2, bgImage: "bg-[url('/svg/g2.webp')]", title: "Card 2" },
        { id: 3, bgImage: "bg-[url('/svg/g3.webp')]", title: "Card 3" },
        { id: 4, bgImage: "bg-[url('/svg/g4.webp')]", title: "Card 4" },
        { id: 5, bgImage: "bg-[url('/svg/g5.webp')]", title: "Card 5" },
        { id: 6, bgImage: "bg-[url('/svg/g6.webp')]", title: "Card 6" },
   
    ];

    // Duplicate cards for infinite scroll effect
    const infiniteCards = [...galleryCards, ...galleryCards, ...galleryCards];

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateX((prev) => {
                const cardWidth = 320; // 300px width + 20px margin
                const newTranslate = prev - 2; // Move 2px per frame for smooth animation
                
                // Reset position when cards have moved one full set
                if (Math.abs(newTranslate) >= cardWidth * galleryCards.length) {
                    return 0;
                }
                return newTranslate;
            });
        }, 50); // Update every 50ms for smooth animation

        return () => clearInterval(interval);
    }, [galleryCards.length]);

    return(
        <>
        <div className="w-screen mt-15 py-12">
            <h1 className="text-[#7E4300] text-center text-6xl mb-12 fontchange">Gallery</h1>
            
            {/* Carousel Container */}
            <div className="relative w-full overflow-hidden h-100">
                <div 
                    className="flex transition-none gap-10"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        width: 'max-content'
                    }}
                >
                    {infiniteCards.map((card, index) => (
                        <div
                            key={`${card.id}-${index}`}
                            className={`w-80 h-100 ${card.bgImage} flex items-center justify-center text-2xl font-bold rounded-4xl shadow-lg shrink-0`}
                            style={{
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}