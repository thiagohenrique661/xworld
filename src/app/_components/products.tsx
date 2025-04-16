"use client";

import { useState } from "react";
import Image from "next/image";
import checkIcon from "../../../public/checkicon.jpeg"; // Ícone de check

const plans = [
  {
    image: "/imagebronze.jpeg",
    name: "BRONZE",
    bgbtn: "#944b2d",
    features: [
      "Escola de negócios nível 1",
      "25 minutos de consultoria",
      "Análise comportamental",
    ],
  },
  {
    image: "/imagesilver.jpeg",
    bgbtn: "#8a8585",
    name: "PRATA",
    features: [
      "Escola de negócios nível 1",
      "Site com domínio",
      "Networking empresarial",
      "Mentoria 50 min",
      "Curso máquina do sucesso",
      "Registro de marca",
    ],
  },
  {
    image: "/imagegold.jpeg",
    name: "OURO",
    bgbtn: "#e0af09",
    features: [
      "Escola de negócios nível 2.",
      "Curso máquina do Sucesso.",
      "Registro da marca.",
      "Acesso vip a eventos com acompanhante.",
      "Network empresarial",
      "Mentoria.",
      "Criação de logo.",
      "Criação de site com domínio.",
    ],
  },
  {
    image: "/imagerec.jpeg",
    title: "Planos de marketing que valorizam você",
    icon: "/rocketdiagonal.svg",
    name: "RECOMPENSAS",
    subtitle: "Você indica, evolui e conquista",
    bgbtn: "#ba0504",
    features: [
      "Indicação direta.",
      "Indicação indireta.",
      "Indicação Binária.",
      "Plano de carreira.",
    ],
  },
];

export function Products() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const isFewFeatures = selectedPlan.features.length < 5;

  const getButtonStyles = (planName: string, bgbtn: string) => {
    const isSelected = selectedPlan.name === planName;

    return {
      className: `w-full md:w-[200px] px-3 py-2 text-xs md:text-sm font-medium transition-colors duration-300 cursor-pointer text-center rounded-t-2xl ${
        !isSelected ? "bg-purple-900 hover:bg-purple-800" : ""
      }`,
      style: isSelected ? { backgroundColor: bgbtn } : {},
    };
  };

  return (
    <section
      id="produtos"
      className="relative py-16 px-4 text-white overflow-hidden"
    >
      {/* Imagem de fundo */}
      <Image
        src="/bgproducts.jpeg"
        alt="Fundo dos produtos"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Conteúdo com z-index superior */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#660099]">
          Nossos Planos
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Botões de planos */}
          <div className="flex justify-center gap-2 flex-wrap md:flex-nowrap mb-[-1px]">
            {plans.map((plan, index) => {
              const { className, style } = getButtonStyles(plan.name, plan.bgbtn);
              return (
                <button
                  key={index}
                  onClick={() => setSelectedPlan(plan)}
                  className={className}
                  style={style}
                >
                  {plan.name}
                </button>
              );
            })}
          </div>

          {/* Card do plano */}
          <div className="bg-white text-[#50019a] rounded-b-2xl rounded-t-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg min-h-[383px]">
            {/* Features à esquerda */}
            <div
              className={`flex-1 flex flex-col ${
                isFewFeatures ? "justify-center" : "justify-between"
              }`}
            >
              {/* Título e ícone para RECOMPENSAS */}
              {selectedPlan.name === "RECOMPENSAS" && selectedPlan.title && selectedPlan.icon && (
                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src={selectedPlan.icon}
                    alt="Ícone Recompensas"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-xl font-bold">{selectedPlan.title}</h3>
                </div>
              )}

              <ul className="space-y-3">
                {selectedPlan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image
                      src={checkIcon}
                      alt="Check"
                      width={20}
                      height={20}
                      className="min-w-[20px] min-h-[20px]"
                    />
                    <span className="break-words">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 px-6 py-3 bg-red-700 cursor-pointer text-white font-semibold rounded-lg hover:bg-purple-800 transition self-start">
                QUERO SABER MAIS
              </button>
            </div>

            {/* Imagem à direita (escondida no mobile) */}
            <div className="flex-shrink-0 hidden md:block">
              <Image
                src={selectedPlan.image}
                alt={`Plano ${selectedPlan.name}`}
                width={464}
                height={383}
                className="rounded-xl object-cover"
              />
              {/* Subtítulo abaixo da imagem */}
              {selectedPlan.subtitle && (
                <h3 className="mt-4 text-center text-lg font-semibold text-[#50019a] md:block">
                  {selectedPlan.subtitle}
                </h3>
              )}
            </div>

            {/* Subtítulo para telas menores */}
            {selectedPlan.subtitle && (
              <h3 className="mt-4 text-center text-lg font-semibold text-[#50019a] md:hidden">
                {selectedPlan.subtitle}
              </h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}