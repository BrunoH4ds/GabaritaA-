import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND;

export async function getQuestionByYear(
  year: string | number,
  index: string | number,
  language?: string // Parâmetro language é opcional
) {
  try {
    // Condicional para verificar se 'language' está definido
    let url = `${BASE_URL}/exams/${year}/questions?limit=1&offset=${index}`;

    // Se 'language' não for null ou undefined, adicionamos o parâmetro na URL
    if (language) {
      url += `&language=${language}`;
    }

    const response = await axios.get(url);

    // Retorna a primeira (e única) questão, ou null
    return response.data?.questions?.[0] || null;
  } catch (error) {
    console.error("Erro ao buscar questão:", error);
    return null;
  }
}
