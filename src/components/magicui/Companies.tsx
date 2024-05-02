import { useEffect, useRef } from "react";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Companies() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Duplicate the companies array to create a seamless loop
    const companiesDuplicated = [...companies, ...companies];

    // Start the animation when the component mounts
    const animation = container.animate(
      [
        { transform: "translateX(0)" },
        { transform: `translateX(-${container.offsetWidth}px)` },
      ],
      {
        duration: companiesDuplicated.length * 3000, // Adjust speed based on the number of items
        iterations: Infinity, // Repeat infinitely
      }
    );

    // Pause the animation when the mouse hovers over the container
    container.addEventListener("mouseenter", () => {
      animation.pause();
    });

    // Resume the animation when the mouse leaves the container
    container.addEventListener("mouseleave", () => {
      animation.play();
    });

    // Cleanup event listeners when the component unmounts
    return () => {
      container.removeEventListener("mouseenter", () => {
        animation.pause();
      });
      container.removeEventListener("mouseleave", () => {
        animation.play();
      });
    };
  }, []);

  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6 overflow-hidden" ref={containerRef}>
            <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4 xl:grid-cols-8 xl:gap-4">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-40 px-2 dark:brightness-0 dark:invert"
                  alt={logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Companies;
