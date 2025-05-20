"use client";

import { useEffect, useState } from "react";
import { getQuestionByYear } from "../../../../../../../../api/api";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {
  IconArrowBigLeftLineFilled,
  IconArrowBigRightLineFilled,
  IconLogout2,
} from "@tabler/icons-react";
import SingleItem from "@/components/comp_home/SingleItem";
import LoadingOrFailed from "@/components/Optional/LoadingOrFailed";
import { useParams } from "next/navigation";
import type { Question } from "@/types/Questoes";

type Params = {
  year: string[] | string | undefined;
  index: string[] | string | undefined;
  language?: string[] | string | undefined;
}

export default function QuestionPage() {
  const { year, index, language } = useParams<Params>();
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      if (language === "null") {
        const data = await getQuestionByYear(year, index);
        setQuestion(data);
      } else {
        const data = await getQuestionByYear(year, index, language);
        setQuestion(data);
      }
    };

    fetchQuestion();
  }, [year, index, language]);

  if (!question) {
    return <LoadingOrFailed />;
  }

  const handleAnswerClick = (letter: string) => {
    if (!answered) {
      setSelectedAnswer(letter);
      setAnswered(true);
    }
  };
  const currentIndex = typeof index === 'string' ? Number.parseInt(index, 10) : 1;

  // Verifica se é a primeira ou última questão
  const isFirstQuestion = currentIndex === 1;
  const isLastQuestion = currentIndex === 180;

  return (
    <div className="min-h-screen">
      <SingleItem
        title={`${question.title} - ${question.discipline} ${
          question.language ? `- ${question.language}` : ""
        }`}
        image="/QuestoesProva.jpg"
        isLink={false}
        enableHover={false}
        cursorPosition={false}
        fadeFromColor="from-black"
      />

      {/* Contexto */}
      {question.context && (
        <section className="prose max-w-none text-gray-800 dark:text-gray-100 bg-blue-50 dark:bg-blue-950 mt-5 p-5 rounded-md space-y-6">
          <ReactMarkdown>{question.context}</ReactMarkdown>
        </section>
      )}

      {/* Introdução das alternativas */}
      {question.alternativesIntroduction && (
        <section>
          <p className="font-medium text-gray-800 dark:text-gray-100 bg-blue-50 dark:bg-blue-950 mt-5 p-5 rounded-md">
            {question.alternativesIntroduction}
          </p>
        </section>
      )}

      {/* Alternativas com lógica completa */}
      <section className="space-y-4 mt-5">
        {question.alternatives.map((alt) => {
          const isSelected = selectedAnswer === alt.letter;
          const isCorrect = alt.isCorrect;

          let bgColor = "bg-white dark:bg-gray-800";
          let borderColor = "border-gray-300 dark:border-gray-700";
          let markerColor = "";

          if (answered) {
            if (isCorrect) {
              bgColor = "bg-green-50 dark:bg-green-900";
              borderColor = "border-green-400 dark:border-green-600";
              markerColor = "text-green-600";
            } else {
              bgColor = "bg-red-50 dark:bg-red-900";
              borderColor = "border-red-400 dark:border-red-600";
              markerColor = "text-red-700";
            }
          }

          return (
            <div
              key={alt.letter}
              className={`relative p-4 rounded-md border ${bgColor} ${borderColor} ${
                !answered
                  ? "cursor-pointer hover:bg-blue-600/50 hover:border-blue-600 dark:hover:bg-blue-950/50 dark:hover:border-yellow-400"
                  : ""
              }`}
              onClick={() => handleAnswerClick(alt.letter)}
            >
              {/* Ícone acima da letra */}
              {answered && isSelected && (
                <div className="absolute left-4 text-xl font-bold">
                  <span className="text-gray-700 dark:text-gray-100">✘</span>
                </div>
              )}

              {/* Texto da alternativa */}
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                {alt.letter}) {alt.text}
                {answered && (
                  <span className={`ml-2 font-bold ${markerColor}`}>
                    {isCorrect ? "✔ Correta" : "✘ Errada"}
                  </span>
                )}
              </p>

              {/* Imagem da alternativa */}
              {alt.file && (
                <img
                  src={alt.file}
                  alt={`Imagem alternativa ${alt.letter}`}
                  className="mt-2 rounded-md border max-w-full shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              )}
            </div>
          );
        })}
      </section>

      {/* Botões de Navegação */}
      <div className="flex gap-5 mt-5">
        {/* Botão "Voltar" */}
        {isFirstQuestion ? (
          <button
            disabled
            className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 text-white rounded-md text-center opacity-50"
          >
            <IconArrowBigLeftLineFilled />
          </button>
        ) : (
          <Link
            href={`/provaenem/${year}/questao/${currentIndex - 1}/${
              language || "null"
            }`}
            className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 dark:hover:bg-yellow-500 hover:bg-blue-700 text-white rounded-md text-center"
          >
            <IconArrowBigLeftLineFilled />
          </Link>
        )}

        {/* Botão "Sair" */}
        <Link
          href={`/provaenem/${year}`}
          className="flex flex-1 justify-center gap-5 items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-center"
        >
          <IconLogout2 />
        </Link>

        {/* Botão "Próxima" */}
        {isLastQuestion ? (
          <button
            disabled
            className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 text-white rounded-md text-center opacity-50"
          >
            <IconArrowBigRightLineFilled />
          </button>
        ) : (
          <Link
            href={`/provaenem/${year}/questao/${currentIndex + 1}/${
              language || "null"
            }`}
            className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 dark:hover:bg-yellow-500 hover:bg-blue-700 text-white rounded-md text-center"
          >
            <IconArrowBigRightLineFilled />
          </Link>
        )}
      </div>
    </div>
  );
}
