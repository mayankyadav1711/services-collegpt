import SectionTitle from "../Common/SectionTitle";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <MagicContainer className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <MagicCard key={feature.id} className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-2xl">
                {feature.icon}
                <p className="z-10 mt-4 text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {feature.title}
                </p>
                <p className="z-10 mt-2 text-gray-500 dark:text-gray-400">
                  {feature.paragraph}
                </p>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
              </MagicCard>
            ))}
          </MagicContainer>
        </div>
      </section>
    </>
  );
};

export default Features;
