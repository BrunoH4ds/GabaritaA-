export type Disciplina = {
  label: string;
  value: string;
};

export type Idioma = {
  label: string;
  value: string;
};

export type Questao = {
  title: string;
  index: number;
  discipline: string;
  language: string | null; // permite "null" para questões sem idioma
};

export type Prova = {
  title: string;
  year: number;
  disciplines: Disciplina[];
  languages: Idioma[];
  questions: Questao[];
};
