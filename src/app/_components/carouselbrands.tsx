"use client";
import Marquee from "react-fast-marquee";

export function Carouselbrands() {
  return (
    <div className="w-full bg-[#f7f4f4]  py-8">
      {/* Título fora do carousel */}
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-[#660099]">
        MARCAS QUE REGISTRAMOS
      </h1>

      {/* Carousel com fundo roxo */}
      <div className="bg-purple-500 py-4 overflow-hidden">
        <Marquee gradient={false} speed={40} pauseOnHover={false}>
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-white text-2xl sm:text-3xl font-bold uppercase mx-10"
            >
              NOME MARCA
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
