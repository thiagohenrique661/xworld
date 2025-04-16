"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const slides = [
  {
    background: "/background1.jpeg",
    content: (
      <div className="flex flex-col justify-center items-start w-full h-full px-6 sm:px-12 lg:px-20">
        <div className="w-full lg:w-[50%] flex flex-col gap-6 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug whitespace-pre-line">
            {`Toda grande marca teve um começo \nAgora é a sua vez!`}
          </h1>

          <p className="mt-1 text-base sm:text-lg lg:text-xl leading-relaxed text-white flex items-center gap-3">
            <Image
              src="/rocketdiagonal.svg"
              alt="Foguete na diagonal"
              width={60}
              height={60}
              className=" shrink-0 "
              
            />
            <span>
              Conectamos você a especialistas em gestão, desenvolvimento pessoal
              e de suas finanças para crescimento exponencial de sua marca.
            </span>
          </p>

          <p className="text-sm sm:text-base lg:text-lg mt-4 font-medium leading-relaxed text-white">
            {`A XWorld foi criada para quem quer crescer de verdade. Reunimos especialistas em gestão, finanças, desenvolvimento pessoal e estratégias de expansão, transformamos teoria em prática e prática em resultado. Ajudamos os empreendedores a vencer os desafios do mercado.`}
          </p>

          <button className="cursor-pointer text-sm sm:text-base text-white w-fit px-6 sm:px-10 py-3 sm:py-4 bg-[#660099] font-semibold rounded-lg shadow hover:bg-red-800 transition mt-6">
            QUERO SABER MAIS
          </button>
        </div>
      </div>
    ),
  },
  {
    background: "/background2.jpeg",
    content: (
      <div className="flex flex-col justify-center items-start w-full h-full px-6 sm:px-12 lg:px-20">
        <div className="w-full lg:w-[50%] flex flex-col gap-6 text-white">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug whitespace-pre-line">
            {`Conectamos mentes e transformamos negócios`}
          </h1>

          <p className="mt-1 text-base sm:text-lg lg:text-xl leading-relaxed text-white flex items-center gap-3">
            <Image
              src="/rocketdiagonal.svg"
              alt="Foguete na diagonal"
              width={60}
              height={60}
              className=" shrink-0 "
              
            />

            <span>
            Venha para nossa escola de negócios
            registrar, proteger e criar uma identidade para a sua marca.
            </span>
          </p>

          <p className="text-sm sm:text-base lg:text-lg mt-4 font-medium leading-relaxed text-white">
            {`Na XWorld, acreditamos que toda marca forte começa com uma base sólida. Nossa missão é te guiar desde os primeiros passos: registrar sua empresa, proteger sua marca e desenvolver uma identidade única que se conecte com o seu público. Aqui, você aprende na prática como transformar ideias em negócios sustentáveis e de impacto.`}
          </p>

          <button className="cursor-pointer text-sm sm:text-base text-white w-fit px-6 sm:px-10 py-3 sm:py-4 bg-[#660099] font-semibold rounded-lg shadow hover:bg-red-800 transition mt-6">
            QUERO SABER MAIS
          </button>
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
                {/* Background sempre imagem */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={slide.background}
                    alt="Slide background"
                    fill
                    className="object-cover object-center w-full h-full"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>

                {/* Conteúdo */}
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
