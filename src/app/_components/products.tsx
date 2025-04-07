"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    image: "/imagebronze.jpeg",
    name: "BRONZE",
    features: [
      "Escola de negócios nível 1",
      "25 minutos de consultoria",
      "Análise comportamental",
    ],
  },
  {
    image: "/imagesilver.jpeg",
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
    features: [
      "Escola de negócios nível 2.",
      "Curso máquina do Sucesso.",
      "Registro da marca.",
      "Acesso vip a eventos presenciais com acompanhante.",
      "Network empresarial",
      "Mentoria.",
      "Criação de logo.",
      "Criação de site com domínio.",
    ],
  },
];

export function Products() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const isFewFeatures = selectedPlan.features.length < 5;

  return (
    <section id="produtos"
      className="bg-black bg-cover bg-center bg-no-repeat py-16 px-4 text-white"
      style={{ backgroundImage: "url('/bgproducts.jpeg')" }}
    >
      <h2 className="text-4xl font-bold text-center mb-12">Nossos Planos</h2>

      <div className="max-w-5xl mx-auto">
        {/* Botões de planos */}
        <div className="flex justify-center gap-2 flex-wrap md:flex-nowrap mb-[-1px]">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(plan)}
              className={`w-full md:w-[320px] px-4 py-3 text-sm md:text-base font-semibold transition cursor-pointer text-center
                ${
                  selectedPlan.name === plan.name
                    ? "bg-red-800 text-white"
                    : "bg-purple-900 hover:bg-purple-800"
                }
                rounded-t-3xl
              `}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Card do plano */}
        <div className="bg-white text-[#50019a] rounded-b-2xl rounded-t-2xl p-6 flex flex-col md:flex-row gap-6 shadow-lg border border-t-0 border-purple-700 min-h-[383px]">
          {/* Features à esquerda */}
          <div
            className={`flex-1 flex flex-col ${
              isFewFeatures ? "justify-center" : "justify-between"
            }`}
          >
            <ul className="space-y-3">
              {selectedPlan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle
                    className="text-green-500 min-w-[20px] min-h-[20px]"
                    size={25}
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
          </div>
        </div>
      </div>
    </section>
  );
}
