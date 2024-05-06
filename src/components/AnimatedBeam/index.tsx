import React, { forwardRef, useRef } from "react";
import { cn } from "lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
// Import useClient if it exists
// import { useClient } from 'next/client';

// eslint-disable-next-line react/display-name
const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function Beams() {
  // Use useClient hook if available
  // if (typeof useClient === 'function') {
  //   useClient();
  // }
  
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div style={{
      display: 'flex',         // Enables flexbox layout
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center',     // Centers vertically
      width: '100vw',
      paddingRight: '1rem',
      paddingLeft: '1rem',  // Full viewport width
    }}> 
      <div className="relative flex h-full w-full  lg:min-w-[32rem] sm:w-[22rem] md:w-[34rem] items-center justify-center overflow-hidden border rounded-lg dark:hover:shadow-2xl dark:hover:shadow-[#62818263] dark:border-[#b4fbff38] bg-background p-10 md:shadow-xl" ref={containerRef}>
        <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
          <div className="flex flex-col justify-center gap-2">
            <Circle ref={div1Ref}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
                {/* SVG content */}
              </svg>
            </Circle>
            {/* Additional Circle components */}
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div6Ref} className="h-16 w-16">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
                {/* SVG content */}
              </svg>
            </Circle>
          </div>
          <div className="flex flex-col justify-center">
            <Circle ref={div7Ref}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.3 78">
                {/* SVG content */}
              </svg>
            </Circle>
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} />
        {/* Additional AnimatedBeam components */}
      </div>  
    </div>
  );
}

// Add display name
Beams.displayName = 'Beams';

export default Beams;
