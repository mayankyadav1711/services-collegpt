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
       
        </div>
      </section>
    </>
  );
};

export default Features;
