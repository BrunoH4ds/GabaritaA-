import Link from "next/link";
import {
  IconArrowBigLeftLineFilled,
  IconArrowBigRightLineFilled,
  IconLogout2,
} from "@tabler/icons-react";

interface Props {
  year: string | string[] | undefined;
  index: number;
  language?: string | string[] | undefined;
  onExit: () => void;
}

export default function NavigationButtons({
  year,
  index,
  language,
  onExit,
}: Props) {
  const isFirst = index === 1;
  const isLast = index === 180;
  const lang = language || "null";

  return (
    <div className="flex gap-5 mt-5">
      {/* Voltar */}
      {isFirst ? (
        <button
          disabled
          className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 text-white rounded-md text-center opacity-50"
        >
          <IconArrowBigLeftLineFilled />
        </button>
      ) : (
        <Link
          href={`/provaenem/${year}/questao/${index - 1}/${lang}`}
          className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 dark:hover:bg-yellow-500 hover:bg-blue-700 text-white rounded-md text-center"
        >
          <IconArrowBigLeftLineFilled />
        </Link>
      )}

      {/* Sair */}
      <button
        onClick={onExit}
        className="flex flex-1 cursor-pointer justify-center gap-5 items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-center"
      >
        <IconLogout2 />
      </button>

      {/* Próxima */}
      {isLast ? (
        <button
          disabled
          className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 text-white rounded-md text-center opacity-50"
        >
          <IconArrowBigRightLineFilled />
        </button>
      ) : (
        <Link
          href={`/provaenem/${year}/questao/${index + 1}/${lang}`}
          className="flex flex-1 justify-center gap-5 items-center px-4 py-2 dark:bg-yellow-400 bg-blue-600 dark:hover:bg-yellow-500 hover:bg-blue-700 text-white rounded-md text-center"
        >
          <IconArrowBigRightLineFilled />
        </Link>
      )}
    </div>
  );
}
