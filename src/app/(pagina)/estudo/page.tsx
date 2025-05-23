"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function EstudoPage() {
  useEffect(() => {
    // Habilita scroll suave para âncoras
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="flex flex-col gap-5 text-gray-800 dark:text-gray-100">
      <div className="flex flex-col border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 rounded-md p-5 gap-2">
        <h1 className="text-3xl font-bold">📚 O que Estudar para o ENEM ?</h1>
      </div>

      {/* Navegação rápida por áreas */}
      <div className="flex flex-wrap gap-5">
        <Link
          href="#ciencias-natureza"
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Ciências da Natureza
        </Link>
        <Link
          href="#matematica"
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Matemática
        </Link>
        <Link
          href="#ciencias-humanas"
          className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Ciências Humanas
        </Link>
        <Link
          href="#linguagens"
          className="flex-1 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Linguagens
        </Link>
      </div>

      {/* Aviso */}
      <section className="flex items-center border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 rounded-md p-5 gap-5">
        <p>
          Aviso: Apesar desses assuntos serem os mais recorrentes em provas do
          Enem, não significa que apenas eles vão cair na prova. Por isso, se
          dedique também ao aprendizado de outros temas!
        </p>
      </section>

      {/* Ciências da Natureza */}
      <section id="ciencias-natureza">
        <h1 className="text-2xl font-bold border-b border-blue-600 dark:border-yellow-300 mb-5">
          Ciências da Natureza
        </h1>

        <h2 className="text-xl font-semibold">Física:</h2>
        <ul className="list-disc list-inside">
          <li>Eletricidade</li>
          <li>Hidrostática</li>
          <li>Ondas</li>
          <li>Óptica</li>
          <li>Usinas / instalações residenciais</li>
          <li>Calorimetria</li>
          <li>Acústica</li>
          <li>Mecânica</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Química:</h2>
        <ul className="list-disc list-inside">
          <li>Unidades de concentração</li>
          <li>Estequiometria</li>
          <li>pH e pOH</li>
          <li>Cadeias Carbônicas</li>
          <li>Radioatividade</li>
          <li>Soluções</li>
          <li>Oxidações</li>
          <li>Eletroquímica</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Biologia:</h2>
        <ul className="list-disc list-inside">
          <li>Ecologia e Sustentabilidade</li>
          <li>Evolução</li>
          <li>Imunização</li>
          <li>Genética e mutações</li>
          <li>Citologia</li>
          <li>Ciclos de carbono, nitrogênio e água</li>
        </ul>
      </section>

      {/* Matemática */}
      <section id="matematica">
        <h1 className="text-2xl font-bold border-b border-blue-600 dark:border-yellow-300 mb-5">
          Matemática
        </h1>
        <ul className="list-disc list-inside">
          <li>Porcentagem</li>
          <li>Razões e proporções</li>
          <li>Leitura e interpretação de gráficos</li>
          <li>Medidas para dados simples</li>
          <li>Prismas</li>
          <li>Regra de três</li>
        </ul>
      </section>

      {/* Ciências Humanas */}
      <section id="ciencias-humanas">
        <h1 className="text-2xl font-bold border-b border-blue-600 dark:border-yellow-300 mb-5">
          Ciências Humanas
        </h1>

        <h2 className="text-xl font-semibold">História do Brasil:</h2>
        <ul className="list-disc list-inside">
          <li>Período Colonial</li>
          <li>República</li>
          <li>Período de escravidão</li>
          <li>Era Vargas</li>
          <li>Ditadura Militar</li>
          <li>Era populista</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">História Geral:</h2>
        <ul className="list-disc list-inside">
          <li>Idade Média e Moderna</li>
          <li>Revolução industrial</li>
          <li>Primeira e Segunda Guerra Mundial</li>
          <li>Nazismo / Holocausto / Fascismo</li>
          <li>Liberalismo</li>
          <li>Guerra Fria</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Geografia:</h2>
        <ul className="list-disc list-inside">
          <li>Agricultura Brasileira</li>
          <li>Impactos no meio ambiente</li>
          <li>Planos e blocos econômicos</li>
          <li>Geopolítica mundial</li>
          <li>Migrações</li>
          <li>Desenvolvimento humano e social</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Filosofia e Sociologia:</h2>
        <ul className="list-disc list-inside">
          <li>Globalização e suas consequências</li>
          <li>Iluminismo</li>
          <li>Existencialismo</li>
          <li>Marxismo</li>
          <li>Contratualismo</li>
          <li>Relações de Trabalho</li>
          <li>Cultura de massa</li>
          <li>Movimentos sociais</li>
          <li>Fé e Razão: São Tomás e Santo Agostinho</li>
          <li>Pensadores da Grécia Antiga</li>
        </ul>
      </section>

      {/* Linguagens */}
      <section id="linguagens">
        <h1 className="text-2xl font-bold border-b border-blue-600 dark:border-yellow-300 mb-5">
          Linguagens
        </h1>

        <h2 className="text-xl font-semibold">Literatura:</h2>
        <ul className="list-disc list-inside">
          <li>
            Movimentos literários: barroco, quinhentismo, modernismo,
            naturalismo e realismo
          </li>
          <li>Obras literárias clássicas</li>
          <li>Figuras de linguagem</li>
          <li>Poesias Concretas</li>
          <li>Literatura Contemporânea</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Língua Portuguesa:</h2>
        <ul className="list-disc list-inside">
          <li>Funções de linguagem e gramática</li>
          <li>Semântica</li>
          <li>Compreensão e interpretação de texto</li>
          <li>Norma culta e coloquial</li>
          <li>Morfologia</li>
          <li>Linguística</li>
          <li>Sintaxe</li>
          <li>Gêneros textuais</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">Educação Física e Artes:</h2>
        <ul className="list-disc list-inside">
          <li>Esportes</li>
          <li>Música</li>
          <li>Grafite</li>
          <li>Artes marciais</li>
          <li>Cubismo</li>
          <li>Obras artísticas</li>
          <li>Renascimento</li>
          <li>Movimentos artísticos e culturais</li>
        </ul>
      </section>
    </div>
  );
}
