"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { data } from "framer-motion/client";
import Hero from "./HomeComponents/Hero";
import OurStory from "./HomeComponents/OurStory";
import Menu from "./HomeComponents/Menu";
import Gallery from "./HomeComponents/Gallery";

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
 

  return (
    <>
    <Hero></Hero>
    <OurStory></OurStory>
    <Menu></Menu>
    <Gallery></Gallery>


    
    </>
  );
}
