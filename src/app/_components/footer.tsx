"use client";
import {
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-x-24">
          {/* Redes sociais */}
          <div className="flex flex-col justify-center items-center sm:items-start pl-10">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo className="w-12 h-12 text-white bg-[#50019a] rounded-lg transition" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo className="w-12 h-12 text-white bg-[#50019a] rounded-lg transition" />
              </a>
              <a
                href="https://wa.me/5511969466523"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappLogo className="w-12 h-12 text-white bg-[#50019a] rounded-lg transition" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo className="w-12 h-12 text-white bg-[#50019a] rounded-lg transition" />
              </a>
            </div>
          </div>

          {/* Acesso rápido */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-4">
              Acesso rápido
            </h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:underline hover:text-red-600">
                HOME
              </a>
              <a href="#sobre" className="hover:underline hover:text-red-600">
                SOBRE
              </a>
              <a href="#produtos" className="hover:underline hover:text-red-600">
                PRODUTOS
              </a>
              <a href="#" className="hover:underline hover:text-red-600">
                INSTAGRAM
              </a>
              <a href="#form" className="hover:underline hover:text-red-600">
                CONTATO
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl sm:text-xl lg:text-2xl font-semibold mb-4">
              Contato
            </h3>
            <p className="text-sm">Telefone: +55 99 91234-5678</p>
            <p className="text-sm">Email: empresa123@dominio.com</p>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-8 pt-4 text-center text-sm border-t border-gray-700">
          <p>
            © Copyright 2025. Todos os direitos reservados | Política de
            Privacidade
          </p>
        </div>
      </div>
    </footer>
  );
}
