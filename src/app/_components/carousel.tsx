"use client";

import Marquee from "react-fast-marquee";

export function Carousel() {
  return (
    <div className="w-full bg-white py-4 overflow-hidden">
      <Marquee gradient={false} speed={40} pauseOnHover={false}>
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="text-red-600 text-3xl font-bold uppercase mx-10"
          >
            $ TESTANDO CAROUSEL $
          </span>
        ))}
      </Marquee>
    </div>
  );
}