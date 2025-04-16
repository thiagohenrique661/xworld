import Image from "next/image";
import imageabout from "../../../public/imageabout.jpeg";
import bgAbout from "../../../public/bgabout.png";

// Corrigir os imports dos ícones
import mortarboard from "../../../public/mortarboard.svg";
import copyrigth from "../../../public/copyright.svg";
import mentoring from "../../../public/mentoring.png";
import networking from "../../../public/networking.svg";

const icons = [
  {
    icon: mortarboard,
    title: "Venha para",
    description: "Escola de negócios."
  },
  {
    icon: copyrigth,
    title: "+15000",
    description: "Marcas registradas."
  },
  {
    icon: mentoring,
    title: "ATÉ",
    description: "45 Minutos de mentoria."
  },
  {
    icon: networking,
    title: "Networking",
    description: "Rede de contatos para seu negócio."
  }
];

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgAbout.src})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Bloco texto + imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-10 mb-12">
          {/* Texto à esquerda */}
          <div className="min-h-[484px] flex flex-col justify-center items-start">
            <h2 className="text-4xl font-bold text-[#660099] mb-4 text-left">SOBRE NÓS</h2>

            <div className="flex-1 flex items-center">
              <p className="text-[#000] text-xl sm:text-xl leading-relaxed max-w-[90%] text-left">
                {`A XWorld é uma extensão da Mundial Marcas e Patentes, empresa com mais de 40 anos de atuação no mercado brasileiro, reconhecida por sua excelência e com uma carteira ativa de mais de 15 mil clientes. 
                A nossa empresa nasceu com o propósito de capacitar empreendedores e contribuir para o crescimento empresarial. Nosso diferencial está em tornar o aprendizado prático, acessível e aplicável à realidade do empreendedor.`}
              </p>
            </div>
          </div>

          {/* Imagem à direita */}
          <div className="w-full flex justify-center">
            <Image
              src={imageabout}
              alt="Representantes da XWorld"
              quality={100}
              className="rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Quadrados abaixo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {icons.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center transition-colors duration-300 hover:bg-[#660099] hover:text-white shadow-md"
            >
              <div className="flex justify-center mb-4">
                <Image src={item.icon} alt={item.title} width={40} height={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}