"use client";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import LinksTab from "../comp_template/NavBarComp/LinksTab";
import Logo from "../shared/Logo";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="dark:bg-blue-950 bg-blue-600 text-white p-5 shadow-md rounded-md">
      {/* Linha principal: logo, links, botão */}
      <div className="flex items-center justify-between">
        {/* Logo + Nome */}
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        {/* Links desktop */}
        <div className="hidden md:flex">
          <LinksTab />
        </div>

        {/* Botão mobile (fica à direita) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            <IconMenu2 size={40} />
          </button>
        </div>
      </div>

      {/* Menu deslizante da direita */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-600 dark:bg-blue-950 text-white p-6 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        {/* Botão para fechar o menu */}
        <div className="flex justify-end">
          <button onClick={toggleMenu}>
            <IconX size={34} />
          </button>
        </div>

        {/* Links */}
        <div className="mt-8 space-y-4">
          <LinksTab isMobile />
        </div>
      </div>

      {/* Sombra/overlay quando menu estiver aberto */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
