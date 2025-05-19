import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_URL_BACKEND;

export async function getProvaByYear(year: string | number) {
  try {
    const response = await axios.get(`${BASE_URL}/exams/${year}`);
    return response.data || null;
  } catch (error) {
    console.error("Erro ao buscar prova:", error);
    return null;
  }
}
