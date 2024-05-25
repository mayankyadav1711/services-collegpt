"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import featuresData from "./featuresData";
import { LampContainer } from "../magicui/LampDemo";
import { CardBody, CardContainer, CardItem } from "@/components/magicui/3dcard";
import Link from "next/link";
import Image from "next/image";
import web from "../../../public/images/hero/web dev.png"
import app from "../../../public/images/hero/app dev.png"
import ecom from "../../../public/images/hero/ecom.png"
import seo from "../../../public/images/hero/seo.png"
import uiux from "../../../public/images/hero/uiux.png"
import host from "../../../public/images/hero/host.png"

const Features = () => {
 
  return (
    <>
      <section id="services" className="">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="my-8 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-100 bg-gradient-to-b from-black to-gray-600/80 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Our Services <br />
        
      </motion.h1>
    </LampContainer>
    <div className="container mt-[-15rem]">
  <div className="flex flex-wrap justify-center mt-[-1rem]">
    {/* First line with three cards */}
    <div className="flex flex-wrap gap-2 lg:gap-8 justify-center align-middle items-center">
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#337d8063] dark:bg-black dark:border-[#62f7ff5c] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-[100%]">
          <Image
            src={web}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
         Web Development
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Crafting digital experiences tailored to your vision and audience.
        </CardItem>
      
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#337d8063] dark:bg-black dark:border-[#62f7ff5c] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-[100%]">
          <Image
            src={app}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
         Mobile Development
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Delivering cutting-edge mobile solutions for seamless experiences.
        </CardItem>
      
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#337d8063] dark:bg-black dark:border-[#62f7ff5c] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-[100%]">
          <Image
            src={ecom}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
         Ecommerce Solution
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Empowering your online business with robust, scalable solutions.
        </CardItem>
      
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#337d8063] dark:bg-black dark:border-[#62f7ff5c] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-[100%]">
          <Image
            src={seo}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
         SEO Services
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Optimizing your digital presence for maximum visibility and impact.
        </CardItem>
      
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#337d8063] dark:bg-black dark:border-[#62f7ff5c] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-[100%]">
          <Image
            src={uiux}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
         UI/UX Design
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Designing user-friendly experiences that inspire interaction.
        </CardItem>
      
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    <CardContainer className="inter-var lg:w-96">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-[#337d8063] dark:bg-black dark:border-[#62f7ff5c] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
      <CardItem translateZ="100" className="w-[100%]">
          <Image
            src={host}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
        Team Extension 
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Augmenting your team with top-tier talent for project success
        </CardItem>
      
        {/* <div className="flex justify-between items-center mt-2">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
    </div>

    {/* Second line with the remaining cards */}
    <div className="flex flex-wrap gap-2 lg:gap-8 mt-[-8rem]">
   
    </div>
    </div>
        </div>
      </section>
    </>
  );
};

export default Features;
