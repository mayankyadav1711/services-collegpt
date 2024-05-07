import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
// import Starfield from 'react-starfield';
import Choose from "@/components/Choose"
// import { AnimatedBeamMultipleInputDemo } from "@/components/Animated-Beam";
// import { Beams } from "@/components/AnimatedBeam";
import Review from "@/components/Reviews.tsx";
import { TechStack } from "@/components/TechStack";
import { Globe } from "@/components/Globe";
// import Beams  from "@/components/Beams"
import toast, { Toaster } from 'react-hot-toast';
export const metadata: Metadata = {
  title: "ColleGPT ~ Get Prepared Together",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
    {/* <Starfield
        starCount={700}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      /> */}
      <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{ zIndex: '9999999999' }} // Ensure the container has a high z-index
  toastOptions={{
    className: '',
    duration: 5000,
    style: {
      background: 'white',
      color: 'black',
      fontSize: '16px',
    },
    success: {
      duration: 3000,
     
    },
  }}
/>
      <ScrollUp />
      <Hero />
      <Features />
      <TechStack />
      <Video />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Choose />
      <Review />
      {/* <AnimatedBeamMultipleInputDemo /> */}
      {/* <Beams /> */}
      {/* <Beams /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
      <Globe />
    </>
  );
}
