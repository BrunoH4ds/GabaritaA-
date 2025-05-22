"use client";

import { getProvaByYear } from "../../../../../api/api";
import Link from "next/link";
import SingleItem from "@/components/comp_home/SingleItem";
import { useState, useEffect } from "react";
import LoadingOrFailed from "@/components/Optional/LoadingOrFailed";
import { useParams } from "next/navigation";
import type { Prova } from "@/types/Prova";

export default function ProvaPage() {
  const { year } = useParams();
  const [prova, setProva] = useState<Prova | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("null");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    async function fetchData() {
      const data = await getProvaByYear(year);
      setProva(data);
    }
    fetchData();
  }, [year]);

  if (!prova) {
    return <LoadingOrFailed />;
  }

  const filteredQuestions = prova.questions.filter((question) => {
    const term = searchTerm.trim();

    // Se estiver vazio, retorna todas
    if (!term) return true;

    // Tenta transformar o termo em número
    const termAsNumber = Number(term);

    // Se for número válido, compara diretamente com o índice
    if (!Number.isNaN(termAsNumber)) {
      return question.index === termAsNumber;
    }

    // Caso contrário, permite busca textual por título
    return question.title.toLowerCase().includes(term.toLowerCase());
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const questionsToDisplay = filteredQuestions.slice(0, visibleCount);

  return (
    <div className="min-h-screen">
      <SingleItem
        title={prova.title}
        isLink={false}
        enableHover={false}
        cursorPosition={false}
      />

      {/* Disciplinas */}
      <section className="flex items-center bg-blue-50 dark:bg-blue-950 rounded-md p-5 gap-5 mt-5">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-yellow-300">
          Disciplinas:
        </h2>
        <ul className="flex gap-3 flex-wrap p-3 rounded-lg">
          {prova.disciplines?.map((disciplina) => (
            <li
              key={disciplina.value}
              className="bg-blue-100 dark:bg-yellow-300 text-blue-800 dark:text-gray-900 px-4 py-2 rounded-full text-sm font-medium"
            >
              {disciplina.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Idiomas */}
      {prova.languages?.length > 0 && (
        <section className="mt-5 bg-blue-50 dark:bg-blue-950 rounded-md p-5 gap-5">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-yellow-300 mb-3">
            Escolha o idioma:
          </h2>
          <ul className="flex flex-col md:flex-row gap-3">
            {prova.languages.map((lang) => {
              const isSelected = selectedLanguage === lang.value;

              return (
                <li
                  key={lang.value}
                  onClick={() => setSelectedLanguage(lang.value)}
                  className={`
              relative flex-1 p-4 rounded-md text-xl font-bold text-center text-white shadow-md cursor-pointer transition overflow-hidden bg-center bg-cover
              ${
                lang.value === "ingles"
                  ? 'bg-[url("/Flag/UnitedStatesFlag.jpg")]'
                  : ""
              }
              ${
                lang.value === "espanhol"
                  ? 'bg-[url("/Flag/EspanishFlag.jpg")]'
                  : ""
              }
              ${isSelected ? "ring-3 ring-blue-600 dark:ring-yellow-400" : ""}
              group
            `}
                >
                  <div className="absolute inset-0 bg-blue-700 dark:bg-yellow-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-0" />
                  <span className="relative z-10">{lang.label}</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Botão de ação */}
      <section className="mt-5">
        {prova.languages?.length > 0 ? (
          selectedLanguage !== "null" ? (
            <Link href={`/provaenem/${year}/questao/1/${selectedLanguage}`}>
              <button className="w-full cursor-pointer bg-blue-50 dark:bg-yellow-300 text-blue-700 dark:text-gray-900 border border-blue-600 dark:border-yellow-500 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-yellow-400 transition">
                Fazer Prova
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 font-semibold px-6 py-3 rounded-lg cursor-not-allowed"
            >
              Selecione um idioma para começar
            </button>
          )
        ) : (
          // Quando não há idiomas, ainda assim o botão leva pra URL com "null"
          <Link href={`/provaenem/${year}/questao/1/null`}>
            <button className="w-full cursor-pointer bg-blue-50 dark:bg-yellow-300 text-blue-700 dark:text-gray-900 border border-blue-600 dark:border-yellow-500 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 dark:hover:bg-yellow-400 transition">
              Iniciar Prova
            </button>
          </Link>
        )}
      </section>

      {/* Campo de busca */}
      <section className="mt-5">
        <input
          type="text"
          className="outline-none w-full border border-blue-300 dark:border-yellow-500 p-5 pr-12 font-medium text-sm rounded-lg 
                     bg-blue-50 dark:bg-blue-950 text-gray-700 dark:text-gray-100 
                     placeholder-gray-500 dark:placeholder-gray-400 
                     transition focus:border-blue-600 dark:focus:border-yellow-400 
                     focus:ring focus:ring-blue-300 dark:focus:ring-yellow-500"
          placeholder="Pesquisar por número da questão..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      {/* Lista de questões */}
      <section className="mt-5">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
            {questionsToDisplay.map((question, index) => (
              <SingleItem
                {...question}
                year={year}
                image="/QuestoesProva.jpg"
                hoverColor="hover:bg-black/80"
                fadeFromColor="from-black"
                isQuestion
                key={`${index}`}
              />
            ))}
          </div>
        </div>

        {/* Botão de Mostrar Mais */}
        {visibleCount < filteredQuestions.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 rounded-md cursor-pointer hover:bg-blue-700 dark:hover:bg-yellow-400 transition"
            >
              Mostrar mais
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
