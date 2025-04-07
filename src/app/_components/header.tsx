"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../app/components/ui/button";
import { List, X } from "lucide-react";



export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#010207] shadow-md">
  <nav className="container mx-auto flex justify-between items-center p-4 font-bungee">
    <Image
      src="/logo.png"
      alt="logo"
      width={50}
      height={50}
      className="cursor-pointer ml-5"
    />

    <ul className="hidden lg:flex gap-10 text-white font-medium absolute left-1/2 transform -translate-x-1/2">
      <li><a href="#" className="hover:text-red-600">HOME</a></li>
      <li><a href="#sobre" className="hover:text-red-600">SOBRE</a></li>
      <li><a href="#produtos" className="hover:text-red-600">PRODUTOS</a></li>
      <li><a href="#" className="hover:text-red-600">INSTAGRAM</a></li>
      <li>
        <a
          href="https://wa.me/5511969466523"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          CONTATO
        </a>
      </li>
    </ul>

    <Button className="bg-red-800 cursor-pointer h-12 w-[150px] px-6 hidden lg:block hover:text-black hover:bg-white font-bold">
      <a href="#form">XGROW</a>
    </Button>

    <button
      className="lg:hidden text-white"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      {menuOpen ? <X size={32} /> : <List size={32} />}
    </button>
  </nav>

  {menuOpen && (
    <div className="lg:hidden absolute top-full left-0 w-full bg-[#222] shadow-md flex flex-col items-center gap-6 py-6 z-40">
      <ul className="text-center text-lg font-medium text-white">
        <li className="py-2"><a href="#">HOME</a></li>
        <li className="py-2"><a href="#sobre">SOBRE</a></li>
        <li className="py-2"><a href="#produtos">PRODUTOS</a></li>
        <li className="py-2"><a href="#">INSTAGRAM</a></li>
      </ul>

      <Button className="bg-red-800 cursor-pointer h-12 w-[150px] px-6 font-bold">
        <a href="#form">XGROW</a>
      </Button>
    </div>
  )}
</header>
  );
}