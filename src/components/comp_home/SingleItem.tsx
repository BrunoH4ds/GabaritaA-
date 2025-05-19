"use client";

import Image from "next/image";
import Link from "next/link";

interface SingleItemProps {
  year?: number;
  title: string;
  index?: number;
  discipline?: string;
  language?: string;
  image?: string;
  isQuestion?: boolean;
  hoverColor?: string; // NOVO
  fadeFromColor?: string; // NOVO
  enableHover?: boolean; // NOVO
  enableFade?: boolean; // NOVO
  isLink?: boolean; // NOVO
  cursorPosition?:boolean;
}

export default function SingleItem({
  year,
  title,
  index,
  discipline,
  language,
  image = "/ProvasEnemIMG.jpeg",
  isQuestion = false,
  hoverColor = "hover:bg-blue-500 dark:hover:bg-yellow-300", // padrão azul
  fadeFromColor = "from-blue-600/60 dark:from-yellow-300/60", // padrão azul
  enableHover = true, // hover ativo por padrão
  enableFade = true, // fade ativo por padrão
  isLink = true, // Adiciona controle do link
  cursorPosition = true,
}: SingleItemProps) {
  const content = (
    <div
      className={`relative flex items-center p-6 rounded-md 
          bg-black/50 backdrop-blur-lg transition-all duration-300 w-full
          ${isQuestion ? "h-[150px]" : "h-[200px]"}
          cursor-${cursorPosition ? "pointer" : "default"} // Condicional para cursor
          overflow-hidden
          ${enableHover ? hoverColor : ""}`}
    >
      {/* Imagem de fundo */}
      <Image
        src={image}
        alt={title}
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
      />

      {/* Gradiente personalizado por cima da imagem */}
      {enableFade && (
        <div className={`absolute inset-0 bg-gradient-to-r ${fadeFromColor} to-transparent z-0 pointer-events-none`} />
      )}

      {/* Conteúdo */}
      <div className="flex flex-col z-10 text-white space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>

        {isQuestion && (
          <div className="text-sm space-y-1">
            {discipline && (
              <p>
                <span className="font-semibold">Disciplina:</span> {discipline}
              </p>
            )}
            {language && (
              <p>
                <span className="font-semibold">Idioma:</span> {language}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // Verifica se deve renderizar o link ou apenas o conteúdo
  return isLink ? (
    <Link
      href={
        isQuestion
          ? `/provaenem/${year}/questao/${index}/${language}`
          : `/provaenem/${year}`
      }
    >
      {content}
    </Link>
  ) : (
    content
  );
}
