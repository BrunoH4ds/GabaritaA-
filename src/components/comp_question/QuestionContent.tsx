import ReactMarkdown from "react-markdown";
import SingleItem from "@/components/comp_home/SingleItem";
import type { Question } from "@/types/Questoes";

interface Props {
  question: Question;
}

export default function QuestionContent({ question }: Props) {
  return (
    <>
      <SingleItem
        title={`${question.title} - ${question.discipline}${question.language ? ` - ${question.language}` : ""}`}
        image="/QuestoesProva.jpg"
        isLink={false}
        enableHover={false}
        cursorPosition={false}
        fadeFromColor="from-black"
      />

      {question.context && (
        <section className="prose bg-blue-50 dark:bg-blue-950 mt-5 p-5 rounded-md space-y-6 text-gray-800 dark:text-gray-100">
          <ReactMarkdown>{question.context}</ReactMarkdown>
        </section>
      )}

      {question.alternativesIntroduction && (
        <section>
          <p className="font-medium text-gray-800 dark:text-gray-100 bg-blue-50 dark:bg-blue-950 mt-5 p-5 rounded-md">
            {question.alternativesIntroduction}
          </p>
        </section>
      )}
    </>
  );
}
