import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full bg-blue-50 dark:bg-blue-950 rounded-md shadow-md p-8 space-y-6 transition-colors">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          {/* Texto alinhado ao final */}
          {/* Coluna de texto com distribuição vertical */}
          <div className="flex-1  md:h-[400px] flex flex-col justify-between">
            {/* Frase centralizada */}
            <div className="flex-1 flex items-center justify-center">
              <blockquote className="text-3xl font-bold italic text-center text-blue-800 dark:text-yellow-300 px-2 mb-5 md:mb-0">
                “Em meio a tantos problemas, são daí que surgem grandes
                soluções.”
              </blockquote>
            </div>

            {/* Parte inferior: Sobre o Projeto */}
            <div className="mb-2">
              <h1 className="text-4xl font-bold text-blue-600 dark:text-yellow-300">
                Sobre o Projeto
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 mt-2">
                Uma plataforma criada para apoiar estudantes do ENEM com acesso
                interativo a provas reais.
              </p>
            </div>
          </div>
          {/* Imagem */}
          <div className="w-full md:w-1/3 h-[400px] relative rounded-md overflow-hidden border-2 border-blue-600 dark:border-yellow-300">
            <Image
              src="/Criador.jpg"
              alt="Foto do Criador"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Tópicos explicativos */}
        <div className="space-y-6 text-gray-800 dark:text-gray-200 text-lg">
          <div>
            <h2 className="text-xl font-semibold text-blue-500 dark:text-yellow-400 mb-1">
              🎯 Objetivo
            </h2>
            <p>
              Facilitar o acesso a questões do ENEM de forma prática, promovendo
              aprendizado interativo e autonomia nos estudos.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-500 dark:text-yellow-400 mb-1">
              🗂 Organização
            </h2>
            <p>
              Questões separadas por ano e disciplina. Interface intuitiva para
              navegação entre perguntas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-500 dark:text-yellow-400 mb-1">
              ⚙️ Tecnologias Utilizadas
            </h2>
            <p>
              Desenvolvido com <strong>Next.js</strong>,{" "}
              <strong>TypeScript</strong> e <strong>Tailwind CSS</strong>.
              Conectado a uma API que fornece os dados reais das provas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-500 dark:text-yellow-400 mb-1">
              🤝 Contribuições
            </h2>
            <p>
              Este projeto está em constante evolução. Caso tenha sugestões ou
              encontre problemas, contribuições são bem-vindas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
