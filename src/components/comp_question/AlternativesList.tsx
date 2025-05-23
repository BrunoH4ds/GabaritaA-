import type { Question } from "@/types/Questoes";

interface Props {
  question: Question;
  selectedAnswer: string | null;
  answered: boolean;
  onAnswer: (letter: string) => void;
}

export default function AlternativesList({
  question,
  selectedAnswer,
  answered,
  onAnswer,
}: Props) {
  return (
    <section className="space-y-4 mt-5">
      {/* Alternativas com lógica completa */}
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
            onClick={() => onAnswer(alt.letter)}
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
  );
}
