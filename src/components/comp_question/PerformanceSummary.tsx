interface DisciplinePerformance {
  correct: number;
  wrong: number;
}

interface Props {
  correctAnswers: number;
  wrongAnswers: number;
  disciplinePerformance: Record<string, DisciplinePerformance>;
}

export default function PerformanceSummary({
  correctAnswers,
  wrongAnswers,
  disciplinePerformance,
}: Props) {
  return (
    <section className="mt-5 p-6 bg-blue-50 dark:bg-blue-950 rounded-md">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Desempenho geral */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-800 dark:text-yellow-300 mb-4">
            🎯 Desempenho Geral
          </h3>
          <div className="text-lg space-y-2 text-gray-800 dark:text-gray-100">
            <p>
              ✅{" "}
              <span className="font-semibold text-green-600">
                {correctAnswers}
              </span>{" "}
              Acertos
            </p>
            <p>
              ❌{" "}
              <span className="font-semibold text-red-600">
                {wrongAnswers}
              </span>{" "}
              Erros
            </p>
          </div>
        </div>

        {/* Desempenho por disciplina */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-blue-800 dark:text-yellow-300 mb-4">
            📚 Acertos Por Disciplina
          </h4>
          <ul className="space-y-2 text-gray-800 dark:text-gray-100 text-base">
            {Object.entries(disciplinePerformance).map(
              ([discipline, { correct, wrong }]) => (
                <li
                  key={discipline}
                  className="border-b-2 rounded-2 border-blue-800 dark:border-yellow-300 pb-1"
                >
                  <strong>{discipline}</strong>:{" "}
                  <span className="text-green-600">{correct}</span> ✔ |{" "}
                  <span className="text-red-600">{wrong}</span> ✘
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
