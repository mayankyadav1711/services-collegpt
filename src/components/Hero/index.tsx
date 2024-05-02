import Link from "next/link";
import { cn } from "lib/utils";
import ShimmerButton from "@/components/magicui/ShimmerButton";
import TextShimmer from "@/components/magicui/animated-shiny-text";
// import { ArrowRightIcon } from "radix-ui"; // Import ShimmerButton
import RadialGradient from "@/components/magicui/radial-gradient";


const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-transparent md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
         <div className="relative h-full w-full items-center justify-center ">
     
     <RadialGradient />

           <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-[#12b8ff1d] dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 ",
        )}
      >
        <TextShimmer className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Magic UI</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </TextShimmer>
      </div>
    </div>
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-black dark:text-white dark:bg-gradient-to-br from-white from-30% to-white/40 dark:bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter dark:text-transparent text-balance sm:text-4xl sm:leading-tight md:text-7xl md:leading-tight">
    Magic UI is the new way to build landing pages.
</h1>

                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Startup is free Next.js template for startups and SaaS
                  business websites comes with all the essential pages,
                  components, and sections you need to launch a complete
                  business website, built-with Next 13.x and Tailwind CSS.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                
<ShimmerButton className="shadow-2xl">
  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white from-white to-slate-900/10 dark:from-white dark:to-slate-900/10 lg:text-lg flex items-center">
  <span className="relative flex-shrink-0 w-6 h-6 bg-white rounded-full mr-2">
  <svg width="10" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out text-black button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
            <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
        </svg>
    </span>
    Explore More
  </span>
</ShimmerButton>



                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
