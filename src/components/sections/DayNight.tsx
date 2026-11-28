import type React from "react";
import { cn } from "../../lib/utils";

export default function DayNight({
  sunMoonRef,
}: {
  sunMoonRef?: React.RefObject<HTMLDivElement | null>;
}) {
  // const now = new Date();
  // const hour = now.getHours();
  const hour = 6;
  // 6 is 6AM, 18 is 6PM
  const isDay = hour >= 6 && hour < 18;

  console.log(hour, isDay ? "Morning" : "Night");

  return (
    <div
      className={cn(
        "size-full absolute top-0 left-0 -z-10",
        isDay ? "bg-cyan-500" : "bg-indigo-950/50",
      )}
    >
      <div
        ref={sunMoonRef}
        className={cn(
          "m-10 size-55 rounded-full shadow-[0px_0px_50px_0px_var(--tw-shadow-color)]",
          isDay ? "bg-yellow-400 shadow-yellow-400" : "bg-white shadow-white",
        )}
      ></div>
    </div>
  );
}
