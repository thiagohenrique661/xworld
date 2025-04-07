"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    background: "/bgprincipal.jpeg",
    content: (
      <div className="flex flex-col gap-6 text-white max-w-3xl px-2 sm:px-12 absolute left-2 sm:left-12 top-10 sm:top-20 self-start">
        <div className="flex flex-col items-center text-center">
          <h4 className="text-3xl sm:text-6xl lg:text-6xl w-max font-bold inline-block px-4 py-1 rounded-lg">
            Escola De Negócios
          </h4>
        </div>
        <div className="mt-2 sm:mt-4 max-w-6xl text-left">
          <h2 className="text-2xl sm:text-xl lg:text-3xl p-1 font-bold leading-snug text-center bg-[#50019a]">
            Um espaço criado e dedicado a você e ao crescimento da sua empresas
          </h2>
          <p className="text-xl sm:text-lg lg:text-xl mt-6 sm:mt-10 leading-relaxed font-bold">
            Aqui você encontra um lugar desenvolvido exclusivamente para o seu
            crescimento no mundo dos negócios, com mentoria de grandes
            profissionais, desenvolvilmento de marca, network e muito mais.
            <br />
            Ajudamos a transformar sua vida e prosperar.
          </p>
        </div>

        <button className="text-sm sm:text-base text-white w-fit px-6 sm:px-10 py-3 sm:py-4 bg-[#50019a] font-semibold rounded-lg shadow cursor-pointer hover:bg-red-800 transition mt-4 sm:mt-6">
          QUERO SABER MAIS
        </button>
      </div>
    ),
  },
  {
    background: "/bgprincipal2.jpeg",
    content: (
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full px-4 sm:px-12 gap-6 sm:gap-8 mt-10 sm:mt-20">
        <div className="bg-purple-950 text-white p-4 sm:p-6 rounded-lg max-w-xl w-full text-left flex-1">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            IMPULSIONE O SEU NEGÓCIO
          </h1>
          <p className="text-xl sm:text-lg">
            A escola de negócios feita para o seu sucesso! Completa, prática e
            pensada para você.
          </p>
          <button className="mt-4 sm:mt-5 w-fit px-5 sm:px-6 py-2 sm:py-3 bg-[#000] text-white font-semibold rounded-lg shadow cursor-pointer hover:bg-white hover:text-black transition">
            Quero saber mais
          </button>
        </div>
        <div className="w-full max-w-xl relative aspect-[4/3] rounded-lg overflow-hidden flex-1">
          <Image
            src="/mentoria.jpeg"
            alt="Executivos"
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
  },
];

export function Apresentation() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  return (
    <section className="relative bg-black overflow-hidden h-screen">
      <div className="relative w-full h-full">
        {/* Carrossel */}
        <div className="overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full relative flex items-center justify-start"
              >
                {/* Background image */}
                {slide.background && (
                  <div className="absolute inset-0">
                    <Image
                      src={slide.background}
                      alt="Slide background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>
                )}
                <div className="relative z-10 w-full flex justify-start items-center h-full">
                  {slide.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <button
          className="absolute left-3 z-20 top-1/2 cursor-pointer -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          className="absolute right-3 z-20 top-1/2 cursor-pointer -translate-y-1/2 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}