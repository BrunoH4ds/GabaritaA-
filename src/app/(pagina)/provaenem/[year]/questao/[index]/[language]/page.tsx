"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getQuestionByYear } from "../../../../../../../../api/api";
import LoadingOrFailed from "@/components/Optional/LoadingOrFailed";
import type { Question } from "@/types/Questoes";

// Componentes divididos
import QuestionContent from "@/components/comp_question/QuestionContent";
import AlternativesList from "@/components/comp_question/AlternativesList";
import PerformanceSummary from "@/components/comp_question/PerformanceSummary";
import NavigationButtons from "@/components/comp_question/NavigationButtons";

type Params = {
  year: string[] | string | undefined;
  index: string[] | string | undefined;
  language?: string[] | string | undefined;
};

export default function QuestionPage() {
  const { year, index, language } = useParams<Params>();
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [disciplinePerformance, setDisciplinePerformance] = useState<
    Record<string, { correct: number; wrong: number }>
  >({});

  const currentIndex =
    typeof index === "string" ? Number.parseInt(index, 10) : 1;
  const uniqueStorageKey = `prova_${year}_${language}`;

  // Carrega a questão
  useEffect(() => {
    const fetchQuestion = async () => {
      const data = await getQuestionByYear(
        year,
        index,
        language === "null" ? undefined : language
      );
      setQuestion(data);
    };
    fetchQuestion();
  }, [year, index, language]);

  // Carrega progresso salvo
  useEffect(() => {
    const uniqueStorageKey = `prova_${year}_${language}`;
    const savedCorrectAnswers = localStorage.getItem(
      `${uniqueStorageKey}_correctAnswers`
    );
    const savedWrongAnswers = localStorage.getItem(
      `${uniqueStorageKey}_wrongAnswers`
    );
    const savedDisciplinePerformance = localStorage.getItem(
      `${uniqueStorageKey}_disciplinePerformance`
    );

    if (savedCorrectAnswers) setCorrectAnswers(Number(savedCorrectAnswers));
    if (savedWrongAnswers) setWrongAnswers(Number(savedWrongAnswers));
    if (savedDisciplinePerformance)
      setDisciplinePerformance(JSON.parse(savedDisciplinePerformance));
  }, [year, language]);

  // Limpa dados ao sair da página
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem(`${uniqueStorageKey}_correctAnswers`);
      localStorage.removeItem(`${uniqueStorageKey}_wrongAnswers`);
      localStorage.removeItem(`${uniqueStorageKey}_disciplinePerformance`);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [uniqueStorageKey]);

  if (!question) {
    return <LoadingOrFailed />;
  }

  // Atualiza desempenho
  const updatePerformance = (isCorrect: boolean, discipline: string) => {
    if (isCorrect) {
      setCorrectAnswers((prev) => {
        const updated = prev + 1;
        localStorage.setItem(
          `${uniqueStorageKey}_correctAnswers`,
          updated.toString()
        );
        return updated;
      });
    } else {
      setWrongAnswers((prev) => {
        const updated = prev + 1;
        localStorage.setItem(
          `${uniqueStorageKey}_wrongAnswers`,
          updated.toString()
        );
        return updated;
      });
    }

    setDisciplinePerformance((prev) => {
      const current = prev[discipline] || { correct: 0, wrong: 0 };
      const updated = {
        ...prev,
        [discipline]: {
          correct: isCorrect ? current.correct + 1 : current.correct,
          wrong: isCorrect ? current.wrong : current.wrong + 1,
        },
      };
      localStorage.setItem(
        `${uniqueStorageKey}_disciplinePerformance`,
        JSON.stringify(updated)
      );
      return updated;
    });
  };

  const handleAnswerClick = (letter: string) => {
    if (!answered) {
      setSelectedAnswer(letter);
      setAnswered(true);
      const isCorrect = question.alternatives.some(
        (alt) => alt.letter === letter && alt.isCorrect
      );
      updatePerformance(isCorrect, question.discipline);
    }
  };

  const handleExit = () => {
    localStorage.removeItem(`${uniqueStorageKey}_correctAnswers`);
    localStorage.removeItem(`${uniqueStorageKey}_wrongAnswers`);
    localStorage.removeItem(`${uniqueStorageKey}_disciplinePerformance`);
    window.location.href = `/provaenem/${year}`;
  };

  return (
    <div className="min-h-screen">
      {/* Título, disciplina, linguagem e contexto */}
      <QuestionContent question={question} />

      {/* Alternativas */}
      <AlternativesList
        question={question}
        selectedAnswer={selectedAnswer}
        answered={answered}
        onAnswer={handleAnswerClick}
      />

      {/* Desempenho */}
      <PerformanceSummary
        correctAnswers={correctAnswers}
        wrongAnswers={wrongAnswers}
        disciplinePerformance={disciplinePerformance}
      />

      {/* Navegação */}
      <NavigationButtons
        year={year}
        index={currentIndex}
        language={language}
        onExit={handleExit}
      />
    </div>
  );
}
