"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero></Hero>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <OurStory></OurStory>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Menu></Menu>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Gallery></Gallery>
      </motion.div>
    </motion.div>

    
    </>
  );
}
