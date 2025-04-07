import Image from "next/image";
import empresa from "../../../public/empresa.png";

const baloncontent = [
  {
    icon: "/mortarboard.svg",
    title: "+100",
    description: "Alunos mentorados",
  },
  {
    icon: "/copyright.svg",
    title: "+100",
    description: "Marcas registradas",
  },
  {
    icon: "/rocket.svg",
    title: "+100",
    description: "Negócios alavancados",
  },
  {
    icon: "/heart.svg",
    title: "CUIDADO",
    description: "Atendimento humanizado",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-black py-16">
      <div className="container mx-auto px-4">
        {/* Bloco imagem + texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Texto */}
          <div className="bg-purple-950 rounded-2xl h-[500px] flex flex-col px-6 text-center justify-start">
            <h2 className="text-4xl font-bold text-white mt-8">Sobre nós</h2>

            <div className="flex-1 flex items-center justify-center">
              <p className="text-white text-xl sm:text-xl leading-relaxed max-w-[90%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                Lorem Ipsum has been the industry’s standard dummy text since the 1500s. <br /><br />
                It has survived not only five centuries, but also the leap into electronic typesetting. <br /><br />
                It was popularised in the 1960s with the release of Letraset sheets.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="h-[500px] w-full rounded-3xl overflow-hidden">
            <Image
              src={empresa}
              alt="Imagem da fachada da empresa"
              quality={100}
              className="w-full h-full object-cover hover:scale-110 duration-300"
              priority
            />
          </div>
        </div>

        {/* 4 Quadrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {baloncontent.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 text-white rounded-2xl p-6 h-52 flex flex-col items-center justify-center text-center shadow-lg hover:bg-red-800 transition duration-300"
            >
              <Image 
                src={item.icon} 
                alt={item.description} 
                width={70} 
                height={70} 
                className="invert"
              />
              <h1 className="text-2xl font-bold mt-4">{item.title}</h1>
              <p className="text-lg mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
