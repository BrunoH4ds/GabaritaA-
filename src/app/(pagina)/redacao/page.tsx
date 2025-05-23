import RedacaoLinkButton from "@/components/comp_redacao/RedacaoLinkButton";

export default function RedacaoPage() {
  return (
    <div className="space-y-6 text-gray-800 dark:text-gray-100">
      <div className="flex flex-col border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 rounded-md p-5 gap-2">
        <h1 className="text-3xl font-bold">📝 Prática de Redação ENEM</h1>
        <p>
          Explore sites gratuitos para treinar sua redação com correções e temas
          atualizados:
        </p>
      </div>
      <ul className="flex flex-col gap-5">
        <RedacaoLinkButton
          href="https://redacaonline.com.br"
          title="Redação Online"
          description="Corrige redações com base nos critérios do ENEM."
          bgColor="bg-blue-300 dark:bg-blue-700"
          borderColor="border-[#7f8fa6] "
        />

        <RedacaoLinkButton
          href="https://descomplica.com.br"
          title="Descomplica"
          description="Oferece simulados e correções de redação."
          bgColor="bg-blue-600 dark:bg-blue-800"
          borderColor="border-[#0e4de4]"
        />

        <RedacaoLinkButton
          href="https://estuda.com/possiveis-temas-redacao-enem-2025/"
          title="Estuda.com"
          description="Temas de redação e simuladores gratuitos."
          bgColor="bg-[#C6D656] dark:bg-green-600"
          borderColor="border-blue-300"
        />
        <RedacaoLinkButton
          href="https://coredacao.com"
          title="CoRedacao.com"
          description="Correção de Redação ENEM detalhada e instantânea"
          bgColor="bg-[#F5D0BC] dark:bg-orange-700"
          borderColor="border-[#f6c500]"
        />
      </ul>
      {/* Dicas para a Redação */}
      <section
        id="dicas-redacao"
        className="flex flex-col gap-5 border-t py-5 border-blue-600 dark:border-yellow-300"
      >
        <h2 className="text-2xl font-bold text-blue-600 dark:text-yellow-300">
          ✍️ Dicas para a Redação do ENEM
        </h2>

        <div className="flex flex-col gap-5">
          <div className="border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">
              1 – Esteja atualizado sobre as principais notícias
            </h3>
            <p>
              Os temas da redação geralmente envolvem questões sociais e atuais.
              Acompanhe jornais, portais de notícia e entenda os problemas que
              afetam o Brasil e o mundo.
            </p>
          </div>

          <div className="border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">
              2 – Não fuja do formato exigido
            </h3>
            <p>
              O texto deve ser dissertativo-argumentativo. Isso significa
              apresentar uma tese, desenvolver argumentos e concluir com uma
              proposta. Estude a estrutura e pratique bastante!
            </p>
          </div>

          <div className="border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">
              3 – Treine, treine, treine!
            </h3>
            <p>
              Pegue temas de anos anteriores e pratique. Mostre para professores
              ou colegas, peça feedback e busque evoluir com os erros.
            </p>
          </div>

          <div className="border border-blue-600 bg-blue-50 dark:bg-blue-950 dark:border-yellow-300 p-4 rounded-md shadow-sm">
            <h3 className="font-semibold text-lg">4 – Evite anulação</h3>
            <p>
              Fique atento ao tema e às instruções. Fugir do tema, usar
              linguagem inadequada ou escrever menos que 7 linhas pode zerar sua
              redação. Leia bastante e pratique a interpretação.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
