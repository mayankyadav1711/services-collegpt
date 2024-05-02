"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import featuresData from "./featuresData";
import { LampContainer } from "../magicui/LampDemo";

const Features = () => {
 
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-0 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Main Features <br />
        
      </motion.h1>
    </LampContainer>
        <div className="container">
         
       
        </div>
      </section>
    </>
  );
};

export default Features;
