// Ensure that 'lib/utils' and '@/components/magicui/grid-pattern' are properly imported
import { cn } from "lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";
import { MagicCard, MagicContainer } from "../magicui/magic-card";

const Choose = () => {
  return (
    <>
    <div className="container">
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-3xl lg:text-5xl font-medium tracking-tighter text-black dark:text-white">
        Why Choose Us
      </p>
      
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />
      
    </div>
    <MagicContainer
      className={
        "flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row"
      }
    >
      <MagicCard className="flex lg w-full min-h-h-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-blue-700 mt-2"></div>
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Innovation</h2>
        <p className="text-gray-400">We are constantly pushing boundaries, exploring new ideas and and pioneering solutions to stay ahead of the curve.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,#1211644d,rgba(255,255,255,0))]" />
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-green-700 mt-2"></div>
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Excellence</h2>
        <p className="text-gray-400">We are dedicated to achieving the highest standards in everything we do, ensuring unparalleled quality and performance.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,#0337194d,rgba(255,255,255,0))]" />
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-orange-700 mt-2"></div>
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Quality</h2>
        <p className="text-gray-400">We prioritize quality in every aspect of our work, delivering solutions that meet and exceed expectations.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,#7c22004d,rgba(255,255,255,0))]" />
      </MagicCard>

      
    </MagicContainer>

   
    <MagicContainer
      className={
        "flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row mt-10"
      }
    >
      <MagicCard className="flex lg w-full min-h-h-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-blue-700 mt-2"></div>
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Commitment</h2>
        <p className="text-gray-400">We are committed to our clients' success, going above and beyond to deliver exceptional results on time and within budget.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,#1211644d,rgba(255,255,255,0))]" />
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-green-700 mt-2"></div>
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Trustworthy</h2>
        <p className="text-gray-400">We build trust through transparency, integrity, and reliability, fostering long-lasting relationships with our clients.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,#0337194d,rgba(255,255,255,0))]" />
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        <div className="w-6 h-6 border-2 border-white rounded-full bg-orange-700 mt-2"></div>
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Creative</h2>
        <p className="text-gray-400"> We infuse creativity and innovation into every project, delivering unique and engaging solutions that captivate audiences.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,#7c22004d,rgba(255,255,255,0))]" />
      </MagicCard>

      
    </MagicContainer>
    </div>
</>
  );
};

export default Choose;
