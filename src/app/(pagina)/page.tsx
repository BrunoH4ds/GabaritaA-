"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl flex flex-col md:flex-row justify-between gap-10 items-center">
        {/* Texto */}
        <div className="text-center md:text-left space-y-6 md:w-3/5">
          <h1 className="text-4xl font-bold text-blue-800 dark:text-yellow-300">
            Boas-vindas ao GabaritaAí
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            Um projeto feito para quem quer se preparar para o ENEM com praticidade.
            Explore questões anteriores, filtre por ano, revise seus conhecimentos e acompanhe seu progresso com facilidade.
          </p>

          {/* Botões */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Link href="/sobre">
              <button className="bg-white text-blue-700  dark:text-gray-900 border cursor-pointer border-blue-600 dark:border-yellow-400 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-yellow-100 transition">
                Sobre o Projeto
              </button>
            </Link>
            <Link href="/provas">
              <button className="bg-blue-600 text-white dark:bg-yellow-300 dark:text-gray-900 cursor-pointer font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-400 transition">
                Ver Provas
              </button>
            </Link>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <Image
            src="/AlunoProvaEnem.png"
            alt="Prova do ENEM"
            width={500}
            height={500}
            className="object-cover dark:border-b-yellow-300 border-b-blue-600 border-5"
            priority
          />
        </div>
      </div>
    </div>
  );
}
