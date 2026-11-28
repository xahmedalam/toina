import { useEffect, useRef, useState } from "react";
import DayNight from "./DayNight";

export default function Hero() {
  const sunMoonRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [maskImage, setMaskImage] = useState("");

  useEffect(() => {
    const sunMoon = sunMoonRef.current as unknown as HTMLDivElement;
    const heading = headingRef.current as unknown as HTMLDivElement;

    if (!sunMoon || !heading) return;

    function updateMask(): void {
      const sunMoonRect = sunMoon.getBoundingClientRect();
      const headingRect = heading.getBoundingClientRect();

      console.log(sunMoonRect);
      console.log(headingRect);

      const x = sunMoonRect.left + sunMoonRect.width / 2 - headingRect.left;
      const y = sunMoonRect.top + sunMoonRect.height / 2 - headingRect.top;
      const radius = sunMoonRect.width / 2;

      console.log({ x, y });

      const mask = `radial-gradient(
        circle ${radius}px at ${x}px ${y}px,
        black 99%,
        transparent 100%
      )`;

      setMaskImage(mask);
    }

    updateMask();
    const observer = new ResizeObserver(updateMask);
    observer.observe(sunMoon);
    observer.observe(heading);
    window.addEventListener("resize", updateMask);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateMask);
    };
  }, []);

  return (
    <section className="text-gray-400 body-font relative">
      <DayNight sunMoonRef={sunMoonRef} />
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div ref={headingRef} className="relative">
            {/* Normal text */}
            <h1 className="title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-bold text-foreground uppercase">
              SPARK JOY WITH EVERY TOY
            </h1>
            {/* Mask text for SUN and MOON */}
            <h1
              className="title-font lg:text-7xl sm:text-4xl text-3xl mb-4 font-bold text-background uppercase absolute inset-0 pointer-events-none"
              style={{ maskImage: maskImage }}
            >
              SPARK JOY WITH EVERY TOY
            </h1>
          </div>
          <div className="flex justify-center">
            <button id="button">SHOP GAMES & PUZZLES</button>
          </div>
        </div>
        <div className="lg:max-w-1/2 lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero.webp"
          />
        </div>
      </div>
    </section>
  );
}
