"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-white dark:bg-black",
        className,
      )}
    >
      <div className="relative z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }} // Initial width for larger screens
          whileInView={{ opacity: 1, width: "20rem" }} // Target width for smaller screens
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[20rem] sm:w-[30rem] lg:w-[40rem] overflow-visible from-[#12b8ff33] dark:from-[#3087ac]  via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]  dark:via-transparent"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-black" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-32 bg-white [mask-image:linear-gradient(to_right,white,transparent)] dark:bg-black" />
        </motion.div>
        <motion.div
  initial={{ width: "15rem" }} // Initial width for larger screens
  whileInView={{ width: "20rem" }} // Target width for smaller screens
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="absolute inset-auto z-50 h-0.5 w-[20rem] sm:w-[30rem] lg:w-[40rem] -translate-y-[7rem] bg-[#12b8ff] dark:bg-[#3087ac]"
></motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }} // Initial width for larger screens
          whileInView={{ opacity: 1, width: "20rem" }} // Target width for smaller screens
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[20rem] sm:w-[30rem] lg:w-[40rem] from-transparent via-transparent to-[#12b8ff33] dark:to-[#3087ac]  text-white [--conic-position:from_290deg_at_center_top] "
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-32 bg-white [mask-image:linear-gradient(to_left,white,transparent)] dark:bg-black" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-white [mask-image:linear-gradient(to_top,white,transparent)] dark:bg-black" />
        </motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
